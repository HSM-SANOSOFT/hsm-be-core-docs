import type { UUID } from 'crypto';

export class DocumentosGeneradosModel {
  constructor(
    public DOC_TIPO: string,
    public DOC_ID: string,
    public DOC_UUID: UUID,
    public CREATED_AT?: Date,
  ) {}
}
