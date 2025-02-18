import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { HASGSRDOCSRECIBIDOSDto } from 'src/dto/HASGSRDOCSRECIBIDOSDto';

@Injectable()
export class HASGSRDOCSRECIBIDOSDatabaseService {
    constructor(private readonly db: DatabaseService) { }
    async guardarGSRDocumentosRecibidos(
        GSR_DOCUMENTOS: HASGSRDOCSRECIBIDOSDto,
    ) {
        const query = {
            label: 'guardarGSRDocumentosRecibidos',
            sql: `INSERT INTO GSR_POSTULACIONES_DOCUMENTOS(POSTULACIONES,TIPO_DOCUMENTO,DOCUMENTO,RUTA) 
            VALUES(:POSTULACIONES,:TIPO_DOCUMENTO,:DOCUMENTO,:RUTA)`,
            params: [
                GSR_DOCUMENTOS.POSTULACION,
                GSR_DOCUMENTOS.TIPO_DOCUMENTO,
                GSR_DOCUMENTOS.DOCUMENTO,
                GSR_DOCUMENTOS.RUTA
            ]
        };

        const resultado = await this.db.query(query);

        return resultado;
    }
}
