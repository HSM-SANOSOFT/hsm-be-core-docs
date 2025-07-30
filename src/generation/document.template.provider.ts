import { HttpStatus, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import * as fs from 'fs';
import { join } from 'path';
import type { DocumentTemplates } from 'src/type';
import { DocumentTypes } from 'src/type/documents templates';

const TEMPLATE_DIR = join(__dirname, 'templates');

const logger = new Logger('DocumentTemplateProvider');

logger.debug(`Loading document templates from ${TEMPLATE_DIR}`);

const templates: DocumentTemplates = {} as DocumentTemplates;

for (const templateType of Object.values(DocumentTypes)) {
  const templatePath = join(TEMPLATE_DIR, `${templateType}.template.hbs`);
  try {
    templates[templateType] = fs.readFileSync(templatePath, 'utf-8');
  } catch (error) {
    logger.error(`Error loading template for ${templateType}: ${error}`);
    throw new RpcException({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: `Failed to load template for ${templateType}: ${error}`,
    });
  }
}

export const DocumentTemplatesProvider = {
  provide: 'DocumentTemplates',
  useValue: templates,
};
