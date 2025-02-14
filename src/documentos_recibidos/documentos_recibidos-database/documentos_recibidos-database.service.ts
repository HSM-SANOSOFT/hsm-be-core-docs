import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { DatabaseService } from 'src/database/database.service';
import { HASGSRDOCSRECIBIDOSDto } from 'src/dto/HASGSRDOCSRECIBIDOSDto';

@Injectable()
export class HASGSRDOCSRECIBIDOSDatabaseService {
    constructor(private readonly db: DatabaseService) { }
    async guardarGSRDocumentosRecibidos(
        file: Express.Multer.File,
        GSR_DOCUMENTOS: HASGSRDOCSRECIBIDOSDto
    ) {
        const query = {
            label: 'guardarGSRDocumentosRecibidos',
            sql: `INSERT INTO GSR_POSTULACIONES_DOCUMENTOS(POSTULACIONES,TIPO_DOCUMENTO,DOCUMENTO,RUTA) 
            VALUES(:POSTULACIONES,:TIPO_DOCUMENTO,:DOCUMENTO,:RUTA)`,
            params: [
                GSR_DOCUMENTOS.postulacion,
                GSR_DOCUMENTOS.Tipo_documento,
                GSR_DOCUMENTOS.DOCUMENTO,
                GSR_DOCUMENTOS.ruta
            ]
        };

        const resultado = await this.db.query(query);
        const filePath = path.join(
            GSR_DOCUMENTOS.ruta,
            GSR_DOCUMENTOS.DOCUMENTO
        );
        fs.writeFileSync(filePath, Buffer.from(file.buffer));
        return resultado;
    }
}
