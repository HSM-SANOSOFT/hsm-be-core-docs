import type { DocumentTypes } from './document_types.type';
import type { DocumentTypesPayloadMap } from './document_types_map.type';

export type DocumentPayload = DocumentTypesPayloadMap[DocumentTypes];
