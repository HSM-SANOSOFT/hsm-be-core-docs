import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { HASGSRDOCSRECIBIDOSDatabaseService } from './documentos_recibidos-database/documentos_recibidos-database.service';
import { DocumentosRecibidosController } from './documentos-recibidos.controller';
import { DocumentosRecibidosService } from './documentos-recibidos.service';

@Module({
    imports: [DatabaseModule],
    controllers: [DocumentosRecibidosController],
    providers: [DocumentosRecibidosService, HASGSRDOCSRECIBIDOSDatabaseService],
})
export class DocumentosRecibidosModule { }