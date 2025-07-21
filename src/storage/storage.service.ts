import * as stream from 'node:stream';

import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

import { StorageProvider } from './storage.provider';

@Injectable()
export class StorageService {
  private readonly logger = new Logger(StorageService.name);
  constructor(private readonly storageProvider: StorageProvider) {}

  async getPresignedUrl(type: string, id: string): Promise<string> {
    const expires = 60 * 60;
    const url = await this.storageProvider.client.presignedUrl(
      'GET',
      this.storageProvider.bucket,
      `${type}/${id}.pdf`,
      expires,
    );
    this.logger.debug(`Presigned URL for ${type}/${id}: ${url}`);
    if (!url) {
      this.logger.error(`Failed to generate presigned URL for ${type}/${id}`);
      throw new RpcException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: `Failed to generate presigned URL for ${type}/${id}`,
      });
    }
    return url;
  }

  async getFileStream(type: string, id: string): Promise<stream.Readable> {
    const fileStream = this.storageProvider.client.getObject(
      this.storageProvider.bucket,
      `${type}/${id}.pdf`,
    );
    this.logger.debug(`File stream for ${type}/${id} retrieved successfully`);
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

  async fileExists(type: string, id: string): Promise<boolean> {
    try {
      const stat = await this.storageProvider.client.statObject(
        this.storageProvider.bucket,
        `${type}/${id}.pdf`,
      );
      return stat ? true : false;
    } catch (error) {
      this.logger.warn(
        `File ${type}/${id}.pdf does not exist or cannot be accessed: ${JSON.stringify(error)}`,
      );
      return false;
    }
  }
}
