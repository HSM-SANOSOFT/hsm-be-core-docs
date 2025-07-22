import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { AppService } from './app.service';
import { createDocumento } from './type/create_documento.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('createDocumento')
  async createDocumento(@Payload('data') data: createDocumento) {
    return await this.appService.createDocumento(data);
  }
}
