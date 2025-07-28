import { Module } from '@nestjs/common';

import { DocumentTemplatesProvider } from './document.template.provider';
import { GenerationService } from './generation.service';
@Module({
  providers: [GenerationService, DocumentTemplatesProvider],
  exports: [GenerationService],
})
export class GenerationModule {}
