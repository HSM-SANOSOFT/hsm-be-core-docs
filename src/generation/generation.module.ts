import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { DocumentTemplatesProvider } from './document.template.provider';
import { GenerationService } from './generation.service';
@Module({
  providers: [GenerationService, DocumentTemplatesProvider],
  exports: [GenerationService],
  imports: [DatabaseModule],
})
export class GenerationModule {}
