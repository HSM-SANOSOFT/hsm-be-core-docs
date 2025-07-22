import { Module } from '@nestjs/common';

import { GenerationService } from './generation.service';
import { DocumentTemplatesProvider } from './document.template.provider';
@Module({
  providers: [GenerationService, DocumentTemplatesProvider],
})
export class GenerationModule {}
