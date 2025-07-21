import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Client } from 'minio';

import { envs } from '../config';

@Injectable()
export class StorageProvider implements OnModuleInit {
  private readonly minioClient: Client;
  private readonly bucketName = envs.HSM_BE_CORE_STORAGE_BUCKET;
  private readonly logger = new Logger(StorageProvider.name);

  constructor() {
    this.minioClient = new Client({
      endPoint: envs.HSM_BE_CORE_STORAGE_HOST,
      port: parseInt(envs.HSM_BE_CORE_STORAGE_PORT, 10),
      useSSL: false,
      accessKey: envs.HSM_BE_CORE_STORAGE_ACCESS_KEY,
      secretKey: envs.HSM_BE_CORE_STORAGE_SECRET_ACCESS_KEY,
    });
  }

  async onModuleInit(): Promise<void> {
    try {
      const exists = await this.minioClient.bucketExists(this.bucketName);
      if (!exists) {
        await this.minioClient.makeBucket(
          this.bucketName,
          envs.HSM_BE_CORE_STORAGE_REGION || 'us-east-1',
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
