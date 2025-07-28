import type { ContratoDocumentTemplate } from './contratos.type';
import type { DocumentTypes } from './document_types.type';
import type { FacturaDocumentTemplate } from './facturas.type';
import type { Hcu053DocumentTemplate } from './hcu_053.type';
import type { InformeDocumentTemplate } from './informes.type';
import type { RecetaDocumentTemplate } from './recetas.type';
import type { ResultadoImagenDocumentTemplate } from './resultado_imagen.type';
import type { ResultadoLaboratorioDocumentTemplate } from './resultado_laboratorio.type';
import type { ResultadoPatologiaDocumentTemplate } from './resultado_patologia.type';

export type DocumentTypesPayloadMap = {
  [DocumentTypes.factura]: FacturaDocumentTemplate;
  [DocumentTypes.contrato]: ContratoDocumentTemplate;
  [DocumentTypes.informe]: InformeDocumentTemplate;
  [DocumentTypes.receta]: RecetaDocumentTemplate;
  [DocumentTypes.resultado_imagen]: ResultadoImagenDocumentTemplate;
  [DocumentTypes.resultado_laboratorio]: ResultadoLaboratorioDocumentTemplate;
  [DocumentTypes.resultado_patologia]: ResultadoPatologiaDocumentTemplate;
  [DocumentTypes.hcu_053]: Hcu053DocumentTemplate;
};
