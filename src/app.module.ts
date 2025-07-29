import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenerationModule } from './generation/generation.module';
import { StorageModule } from './storage/storage.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [StorageModule, GenerationModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
