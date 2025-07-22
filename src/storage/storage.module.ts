import { Module } from '@nestjs/common';

import { StorageController } from './storage.controller';
import { StorageProvider } from './storage.provider';
import { StorageService } from './storage.service';

@Module({
  providers: [StorageService, StorageProvider],
  controllers: [StorageController],
  exports: [StorageService],
})
export class StorageModule {}
