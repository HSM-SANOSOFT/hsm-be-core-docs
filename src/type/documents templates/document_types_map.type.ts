import type { DocumentTypes } from './document_types.type';
import type { Hcu005DocumentTemplate } from './hcu_005.type';
import type { Hcu053DocumentTemplate } from './hcu_053.type';

export type DocumentTypesPayloadMap = {
  [DocumentTypes.hcu_053]: Hcu053DocumentTemplate;
  [DocumentTypes.hcu_005]: Hcu005DocumentTemplate;
};
