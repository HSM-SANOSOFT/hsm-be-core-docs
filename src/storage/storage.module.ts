import { Module } from '@nestjs/common';

import { StorageProvider } from './storage.provider';
import { StorageService } from './storage.service';

@Module({
  providers: [StorageService, StorageProvider],
  controllers: [],
  exports: [StorageService],
})
export class StorageModule {}
