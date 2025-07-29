import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { randomUUID, UUID } from 'crypto';

import { DatabaseRepository } from './database/database.repository';
import { GenerationService } from './generation/generation.service';
import { StorageService } from './storage/storage.service';
import { getDocumento } from './type';
import { createDocumento } from './type/create_documento.type';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(
    private readonly storageService: StorageService,
    private readonly generationService: GenerationService,
    private readonly databaseRepository: DatabaseRepository,
  ) {}
  async createDocumento(
    data: createDocumento,
  ): Promise<{ url: string; uuid: UUID }> {
    const { type } = data;
    const uuid = randomUUID();
    const buffer = await this.generationService.createDocumento(data, uuid);
    await this.storageService.uploadFile(type, uuid, buffer);
    const url = await this.storageService.getPresignedUrl(type, uuid);
    return { url: url, uuid: uuid };
  }
  async getDocumento(data: getDocumento): Promise<{ url: string; uuid: UUID }> {
    const { type, id } = data;
    const { uuid } =
      await this.databaseRepository.DocumentosGeneradosRepository.getDocumento(
        type,
        id,
      );
    this.logger.debug(
      `Retrieved documento with UUID: ${uuid} for type: ${type} and id: ${id}`,
    );
    const fileExists = await this.storageService.fileExists(type, uuid);
    if (!fileExists) {
      throw new Error(`File not found for type ${type} and id ${id}`);
    }
    const url = await this.storageService.getPresignedUrl(type, uuid);
    return { url: url, uuid: uuid };
  }
}
