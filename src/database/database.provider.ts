import { Logger } from '@nestjs/common';
import { envs } from 'config';
import * as oracledb from 'oracledb';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const logger = new Logger('DatabaseProvider');

      let attempts = 5;
      while (attempts > 0) {
        try {
          oracledb.initOracleClient({
            libDir: envs.LD_LIBRARY_PATH,
          });

          const pool = await oracledb.createPool({
            user: envs.DB_USER,
            password: envs.DB_PASSWORD,
            connectString: envs.DB_CONNECTION_STRING,
            poolTimeout: 60,
            poolMin: 1,
            poolMax: 10,
            poolIncrement: 1,
            enableEvents: true,
          });

          logger.log('Oracle connection pool established successfully.');
          return pool;
        } catch (error) {
          logger.error(
            `Error during database initialization: ${error.message}`,
          );
          attempts--;
          if (attempts === 0) throw error;

          logger.log(
            `Retrying database connection in 5 seconds... (${attempts} attempts left)`,
          );
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      }
    },
  },
];
