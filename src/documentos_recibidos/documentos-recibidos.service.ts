import { Injectable } from '@nestjs/common';
import { HASGSRDOCSRECIBIDOSDatabaseService } from 'src/documentos_recibidos/documentos_recibidos-database/documentos_recibidos-database.service';
import { HASGSRDOCSRECIBIDOSDto } from 'src/dto/HASGSRDOCSRECIBIDOSDto';

@Injectable()
export class DocumentosRecibidosService {
    constructor(private readonly db: HASGSRDOCSRECIBIDOSDatabaseService) { }
    async guardarGSRDocumentosRecibidos(
        file: Express.Multer.File,
        GSR_DOCUMENTOS: HASGSRDOCSRECIBIDOSDto
    ) {
        const response = await this.db.guardarGSRDocumentosRecibidos(file, GSR_DOCUMENTOS);
        return response;
    }
}
