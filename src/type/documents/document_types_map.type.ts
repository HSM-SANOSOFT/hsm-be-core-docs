import type { Contrato } from './contratos.type';
import type { DocumentTypes } from './document_types.type';
import type { Factura } from './facturas.type';
import type { Informe } from './informes.type';
import type { Receta } from './recetas.type';
import type { ResultadoImagen } from './resultado_imagen.type';
import type { ResultadoLaboratorio } from './resultado_laboratorio.type';
import type { ResultadoPatologia } from './resultado_patologia.type';

export type DocumentTypesPayloadMap = {
  [DocumentTypes.factura]: Factura;
  [DocumentTypes.contrato]: Contrato;
  [DocumentTypes.informe]: Informe;
  [DocumentTypes.receta]: Receta;
  [DocumentTypes.resultado_imagen]: ResultadoImagen;
  [DocumentTypes.resultado_laboratorio]: ResultadoLaboratorio;
  [DocumentTypes.resultado_patologia]: ResultadoPatologia;
};
