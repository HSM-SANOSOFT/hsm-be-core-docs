import * as fs from 'fs';
import { join } from 'path';
import { DocumentTypes } from 'src/type/documents';

const TEMPLATE_DIR = join(__dirname, 'templates');

export const DocumentTemplatesProvider = {
  provide: 'DocumentTemplates',
  useValue: {
    [DocumentTypes.factura]: fs.readFileSync(
      join(TEMPLATE_DIR, 'factura.hbs'),
      'utf-8',
    ),
    [DocumentTypes.contrato]: fs.readFileSync(
      join(TEMPLATE_DIR, 'contrato.hbs'),
      'utf-8',
    ),
    [DocumentTypes.informe]: fs.readFileSync(
      join(TEMPLATE_DIR, 'informe.hbs'),
      'utf-8',
    ),
    [DocumentTypes.receta]: fs.readFileSync(
      join(TEMPLATE_DIR, 'receta.hbs'),
      'utf-8',
    ),
    [DocumentTypes.resultado_imagen]: fs.readFileSync(
      join(TEMPLATE_DIR, 'resultado_imagen.hbs'),
      'utf-8',
    ),
    [DocumentTypes.resultado_laboratorio]: fs.readFileSync(
      join(TEMPLATE_DIR, 'resultado_laboratorio.hbs'),
      'utf-8',
    ),
    [DocumentTypes.resultado_patologia]: fs.readFileSync(
      join(TEMPLATE_DIR, 'resultado_patologia.hbs'),
      'utf-8',
    ),
  } as const,
};
