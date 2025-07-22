import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { GenerationService } from './generation/generation.service';
import { StorageService } from './storage/storage.service';
import { createDocumento } from './type/create_documento.type';

@Injectable()
export class AppService {
  constructor(
    private readonly storageService: StorageService,
    private readonly generationService: GenerationService,
  ) {}
  async createDocumento(
    data: createDocumento,
  ): Promise<{ url: string; id: string }> {
    const buffer = await this.generationService.createDocumento(data);
    const id = randomUUID();
    await this.storageService.uploadFile(data.type, id, buffer);
    const url = await this.storageService.getPresignedUrl(data.type, id);
    return { url: url, id: id };
  }
}
