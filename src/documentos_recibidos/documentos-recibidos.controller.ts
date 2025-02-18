import { BadRequestException, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { HASGSRDOCSRECIBIDOSDto } from 'src/dto/HASGSRDOCSRECIBIDOSDto';

import { DocumentosRecibidosService } from './documentos-recibidos.service';

@Controller('documentos-recibidos')
export class DocumentosRecibidosController {
    constructor(private readonly service: DocumentosRecibidosService) { }

    @MessagePattern('guardarGSRDocumentosRecibidos')
    async guardarGSRDocumentosRecibidos(payload: {
        file: Express.Multer.File;
        GSR_DOCUMENTOS: HASGSRDOCSRECIBIDOSDto;
    }) {
        // Asegurarse de que el payload es un objeto válido
        if (!payload || typeof payload !== 'object') {
            throw new BadRequestException('El payload recibido no es válido.');
        }

        const { file, GSR_DOCUMENTOS } = payload;

        // Validar GSR_DOCUMENTOS
        if (!GSR_DOCUMENTOS || typeof GSR_DOCUMENTOS !== 'object') {
            throw new BadRequestException(
                'GSR_DOCUMENTOS es requerido y debe ser un objeto válido.',
            );
        }

        // Si se recibe un archivo, logueamos detalles del archivo
        if (file) {
            console.log('File received:', {
                originalname: file.originalname,
                size: file.size,
                mimetype: file.mimetype,
            });
        } else {
            console.warn('No file received.');
        }

        // Llamamos al servicio pasando el objeto GSR_DOCUMENTOS y el archivo (si está presente)
        return this.service.guardarGSRDocumentosRecibidos(GSR_DOCUMENTOS, file);
    }
}
