import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenerationModule } from './generation/generation.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [StorageModule, GenerationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
