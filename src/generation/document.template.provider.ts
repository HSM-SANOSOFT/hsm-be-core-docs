import { Logger } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import { DocumentTypes } from 'src/type/documents templates';

const TEMPLATE_DIR = join(__dirname, 'templates');

const logger = new Logger('DocumentTemplateProvider');

logger.debug(`Loading document templates from ${TEMPLATE_DIR}`);

export const DocumentTemplatesProvider = {
  provide: 'DocumentTemplates',
  useValue: {
    [DocumentTypes.factura]: fs.readFileSync(
      join(TEMPLATE_DIR, 'factura.template.hbs'),
      'utf-8',
    ),
    [DocumentTypes.contrato]: fs.readFileSync(
      join(TEMPLATE_DIR, 'contrato.template.hbs'),
      'utf-8',
    ),
    [DocumentTypes.informe]: fs.readFileSync(
      join(TEMPLATE_DIR, 'informe.template.hbs'),
      'utf-8',
    ),
    [DocumentTypes.receta]: fs.readFileSync(
      join(TEMPLATE_DIR, 'receta.template.hbs'),
      'utf-8',
    ),
    [DocumentTypes.resultado_imagen]: fs.readFileSync(
      join(TEMPLATE_DIR, 'resultado_imagen.template.hbs'),
      'utf-8',
    ),
    [DocumentTypes.resultado_laboratorio]: fs.readFileSync(
      join(TEMPLATE_DIR, 'resultado_laboratorio.template.hbs'),
      'utf-8',
    ),
    [DocumentTypes.resultado_patologia]: fs.readFileSync(
      join(TEMPLATE_DIR, 'resultado_patologia.template.hbs'),
      'utf-8',
    ),
    [DocumentTypes.hcu_053]: fs.readFileSync(
      join(TEMPLATE_DIR, 'hcu_053.template.hbs'),
      'utf-8',
    ),
  } as const,
};
