import { UUID } from 'node:crypto';
import * as stream from 'node:stream';

import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { DocumentTypes } from 'src/type/documents templates/document_types.type';

import { StorageProvider } from './storage.provider';

@Injectable()
export class StorageService {
  private readonly logger = new Logger(StorageService.name);
  constructor(private readonly storageProvider: StorageProvider) {}

  async getPresignedUrl(type: string, uuid: UUID): Promise<string> {
    const expires = 60 * 60;
    const url = await this.storageProvider.client.presignedUrl(
      'GET',
      this.storageProvider.bucket,
      `${type}/${uuid}.pdf`,
      expires,
    );
    this.logger.debug(`Presigned URL for ${type}/${uuid}: ${url}`);
    if (!url) {
      this.logger.error(`Failed to generate presigned URL for ${type}/${uuid}`);
      throw new RpcException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: `Failed to generate presigned URL for ${type}/${uuid}`,
      });
    }
    return url;
  }

  async getFileStream(type: string, uuid: UUID): Promise<stream.Readable> {
    const fileStream = this.storageProvider.client.getObject(
      this.storageProvider.bucket,
      `${type}/${uuid}.pdf`,
    );
    this.logger.debug(`File stream for ${type}/${uuid} retrieved successfully`);
    return fileStream;
  }

  async getFileBuffer(fileStream: stream.Readable): Promise<Buffer> {
    const chunks: Buffer[] = [];
    return new Promise<Buffer>((resolve, reject) => {
      fileStream.on('data', (chunk: Buffer) => chunks.push(chunk));
      fileStream.on('end', () => resolve(Buffer.concat(chunks)));
      fileStream.on('error', err => reject(err));
    });
  }

  async fileExists(type: DocumentTypes, uuid: UUID): Promise<boolean> {
    try {
      const stat = await this.storageProvider.client.statObject(
        this.storageProvider.bucket,
        `${type}/${uuid}.pdf`,
      );
      return stat ? true : false;
    } catch (error) {
      this.logger.warn(
        `File ${type}/${uuid}.pdf does not exist or cannot be accessed: ${JSON.stringify(error)}`,
      );
      return false;
    }
  }

  async uploadFile(
    type: DocumentTypes,
    uuid: UUID,
    content: Buffer,
  ): Promise<void> {
    try {
      await this.storageProvider.client.putObject(
        this.storageProvider.bucket,
        `${type}/${uuid}.pdf`,
        content,
      );
      this.logger.log(`File ${type}/${uuid}.pdf uploaded successfully`);
    } catch (error) {
      this.logger.error(
        `Failed to upload file ${type}/${uuid}.pdf: ${JSON.stringify(error)}`,
      );
      throw new RpcException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: `Failed to upload file ${type}/${uuid}.pdf`,
      });
    }
  }
}
