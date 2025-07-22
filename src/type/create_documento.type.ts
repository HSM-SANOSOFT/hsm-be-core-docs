import type { DocumentTypes } from './documents/document_types.type';
import type { DocumentTypesPayloadMap } from './documents/document_types_map.type';

export type createDocumento = {
  type: DocumentTypes;
  payload: DocumentTypesPayloadMap[DocumentTypes];
};
