import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';

import { StorageService } from './storage.service';

@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}
  @MessagePattern('getDocumentoUrl')
  async getDocumentoUrl(
    @Payload('data') data: { type: string; id: string },
  ): Promise<object> {
    const exist = await this.storageService.fileExists(data.type, data.id);
    if (!exist) {
      throw new RpcException({
        statusCode: HttpStatus.NOT_FOUND,
        message: `File not found: ${data.type}/${data.id}.pdf`,
      });
    }

    const presignedUrl = await this.storageService.getPresignedUrl(
      data.type,
      data.id,
    );
    return { url: presignedUrl };
  }
}
