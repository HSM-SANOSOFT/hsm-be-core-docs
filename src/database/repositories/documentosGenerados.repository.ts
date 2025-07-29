import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { UUID } from 'crypto';
import * as oracledb from 'oracledb';

import { DocumentTypes } from '../../type/documents templates';
import { DatabaseService } from '../database.service';
import { DocumentosGeneradosModel } from '../models';

@Injectable()
export class DocumentosGeneradosRepository {
  private readonly logger = new Logger(DocumentosGeneradosRepository.name);
  constructor(private readonly databaseService: DatabaseService) {}

  async saveDocumento(
    tipo: DocumentTypes,
    id: string,
    uuid: string,
  ): Promise<void> {
    const result = await this.databaseService.execute<DocumentosGeneradosModel>(
      `INSERT INTO DOCUMENTOS_GENERADOS (DOC_TIPO, DOC_ID, DOC_UUID)
       VALUES (:tipo, :id, :uuid)`,
      {
        tipo,
        id,
        uuid,
      },
      {
        autoCommit: true,
      },
    );

    if (result.rowsAffected === 0) {
      this.logger.error('Failed to insert documento generado');
      throw new RpcException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to insert documento generado',
      });
    } else {
      this.logger.debug(
        `Documento generado saved: type=${tipo}, id=${id}, uuid=${uuid}`,
      );
    }
  }

  async getDocumento(type: DocumentTypes, id: string): Promise<{ uuid: UUID }> {
    const result = await this.databaseService.execute<DocumentosGeneradosModel>(
      `SELECT DOC_UUID FROM ( SELECT DOC_UUID FROM DOCUMENTOS_GENERADOS WHERE DOC_TIPO = :type AND DOC_ID = :id ORDER BY CREATED_AT DESC ) WHERE ROWNUM = 1`,
      { type, id },
      {
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      },
    );

    this.logger.debug(
      `Retrieved documento: type=${type}, id=${id}, rows=${result.rows?.length}, result=${JSON.stringify(result.rows)}`,
    );

    if (result.rows && result.rows.length > 0) {
      return { uuid: result.rows[0].DOC_UUID };
    } else {
      this.logger.warn(`Documento not found for type ${type} and id ${id}`);
      throw new RpcException({
        statusCode: HttpStatus.NOT_FOUND,
        message: `Documento not found for type ${type} and id ${id}`,
      });
    }
  }
}
