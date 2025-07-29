import { Injectable } from '@nestjs/common';

import { DocumentosGeneradosRepository } from './repositories';

@Injectable()
export class DatabaseRepository {
  constructor(
    public readonly DocumentosGeneradosRepository: DocumentosGeneradosRepository,
  ) {}
}
