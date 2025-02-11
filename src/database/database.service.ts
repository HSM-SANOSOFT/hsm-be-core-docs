import { HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import * as oracledb from 'oracledb';


@Injectable()
export class DatabaseService {
  private readonly logger = new Logger(DatabaseService.name);

  constructor(
    @Inject('DATABASE_CONNECTION') private readonly dbPool: oracledb.Pool,
  ) {}

  async query(
    queries:
      | { label: string; sql: string; params?: unknown[] }
      | { label: string; sql: string; params?: unknown[] }[],
    transaction: boolean = false,
  ): Promise<any> {
    let attempt = 1;

    while (attempt > 0) {
      let connection: oracledb.Connection;
      const isMultipleQueries = Array.isArray(queries);
      const results: Record<string, any> = {};
      const queryData: any[] = [];

      try {
        connection = await this.dbPool.getConnection();

        if (transaction) {
          this.logger.log('Starting transaction...');
          await connection.execute('BEGIN');
        }

        const queryList = isMultipleQueries ? queries : [queries];

        for (const query of queryList) {
          //this.logger.log(`Executing query: ${query.sql}`);
          //this.logger.log(`Params: ${JSON.stringify(query.params)}`);

          const result = await connection.execute(
            query.sql,
            query.params ?? [],
            {
              outFormat: oracledb.OUT_FORMAT_OBJECT,
              autoCommit: !transaction,
            },
          );

          queryData.push({
            label: query.label,
            sql: query.sql,
            params: query.params,
          });

          if ('rows' in result) {
            if (!result.rows || result.rows.length === 0) {
              throw new RpcException({
                status: HttpStatus.NOT_FOUND,
                message: `No records found for query: ${query.sql}`,
              });
            }

            const formattedRows = result.rows.map((row: Record<string, any>) =>
              this.formatDates(row),
            );
            results[query.label] = results[query.label] = formattedRows; //
          } else if ('rowsAffected' in result) {
            if (result.rowsAffected === 0) {
              throw new RpcException({
                status: HttpStatus.NOT_FOUND,
                message: 'No records were modified',
                data: queryData,
              });
            }
            results[query.label] = true;
          } else {
            results[query.label] = null;
          }
        }

        if (transaction) {
          this.logger.log('Committing transaction...');
          await connection.execute('COMMIT');
        }

        return results;
      } catch (error: any) {
        if (transaction && connection) {
          this.logger.error('Rolling back transaction due to an error...');
          await connection.execute('ROLLBACK');
        }
        attempt--;
        if (attempt === 0) throw this.handleDatabaseError(error, queryData);

        this.logger.log(
          `Retrying database connection in 5 seconds... (${attempt} attempts left)`,
        );
        await new Promise(connection => setTimeout(connection, 5000));
      } finally {
        if (connection) {
          try {
            await connection.close();
          } catch (closeError: any) {
            this.logger.error(
              `Failed to close connection: ${closeError.message}`,
            );
          }
        }
      }
    }
  }

  private formatDates(row: Record<string, any>): Record<string, any> {
    const formattedRow: Record<string, any> = {};

    for (const key in row) {
      if (row[key] instanceof Date) {
        formattedRow[key] = row[key].toISOString().split('T')[0];
      } else {
        formattedRow[key] = row[key];
      }
    }

    return formattedRow;
  }

  private handleDatabaseError(error: any, queryData: any[]): RpcException {
    this.logger.error(`Database error: ${error.message}`);

    const statusMapping: Record<number, HttpStatus> = {
      942: HttpStatus.BAD_REQUEST,
      1017: HttpStatus.UNAUTHORIZED,
      1: HttpStatus.CONFLICT,
    };

    return new RpcException({
      status: statusMapping[error.errorNum] || HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
      data: queryData.length === 1 ? queryData[0] : queryData,
    });
  }
}
