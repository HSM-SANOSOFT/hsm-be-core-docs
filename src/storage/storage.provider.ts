import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Client } from 'minio';

import { envs } from '../config';

@Injectable()
export class StorageProvider implements OnModuleInit {
  private readonly minioClient: Client;
  private readonly bucketName = envs.S3_BUCKET;
  private readonly logger = new Logger(StorageProvider.name);

  constructor() {
    this.minioClient = new Client({
      endPoint: envs.S3_HOST,
      port: parseInt(envs.S3_PORT, 10),
      useSSL: false,
      accessKey: envs.S3_ACCESS_KEY,
      secretKey: envs.S3_SECRET_KEY,
    });
  }

  async onModuleInit(): Promise<void> {
    try {
      const exists = await this.minioClient.bucketExists(this.bucketName);
      if (!exists) {
        await this.minioClient.makeBucket(
          this.bucketName,
          envs.S3_REGION || 'us-east-1',
        );
        this.logger.log(`Bucket '${this.bucketName}' created`);
      }
    } catch (error) {
      this.logger.error(
        `Error initializing MinIO bucket ${this.bucketName}`,
        error,
      );
      throw new RpcException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: `MinIO bucket initialization failed: ${JSON.stringify(error)}`,
      });
    }
  }

  get client(): Client {
    return this.minioClient;
  }

  get bucket(): string {
    return this.bucketName;
  }
}
