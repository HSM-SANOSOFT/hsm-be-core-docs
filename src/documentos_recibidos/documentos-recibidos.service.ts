import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { HASGSRDOCSRECIBIDOSDatabaseService } from 'src/documentos_recibidos/documentos_recibidos-database/documentos_recibidos-database.service';
import { HASGSRDOCSRECIBIDOSDto } from 'src/dto/HASGSRDOCSRECIBIDOSDto';

@Injectable()
export class DocumentosRecibidosService {
    constructor(private readonly db: HASGSRDOCSRECIBIDOSDatabaseService) { }


    async guardarGSRDocumentosRecibidos(
        GSR_DOCUMENTOS: HASGSRDOCSRECIBIDOSDto,
        file: Express.Multer.File,
    ) {
        const logger = new Logger('DatabaseProvider');
        if (!file) {
            logger.log('No file received in service.');
            throw new Error('No file received.');
        }
        const filePath = path.join(
            `/app/uploads`, GSR_DOCUMENTOS.RUTA,
            GSR_DOCUMENTOS.DOCUMENTO + path.extname(file.originalname), // Asegurarse de incluir la extensión del archivo
        );
        logger.log('File path:', filePath);
        const directory = path.dirname(filePath);
        logger.log('Directory:', directory);
        if (!fs.existsSync(directory)) {
            try {
                fs.mkdirSync(directory, { recursive: true });
                logger.log(`Directory created: ${directory}`);
            } catch (err) {
                console.error('Error creating directory:', err);
                throw new Error(`Error creating directory: ${err.message}`);
            }
        }

        let fileSaved = false;
        while (!fileSaved) {
            try {
                await fs.writeFileSync(filePath, Buffer.from(file.buffer));
                logger.log(`File saved at: ${filePath}`);
                console.log(fs.existsSync(filePath));
                fileSaved = fs.existsSync(filePath);
            } catch (err) {
                logger.log('Error saving file:', err);
                throw new Error(`Error saving file: ${err.message}`);
            }
        }

        return await this.db.guardarGSRDocumentosRecibidos(GSR_DOCUMENTOS);
    }
}