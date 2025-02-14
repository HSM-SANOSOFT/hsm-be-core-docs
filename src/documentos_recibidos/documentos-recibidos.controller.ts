import { Controller, UploadedFile, UseInterceptors } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FileInterceptor } from '@nestjs/platform-express';
import { HASGSRDOCSRECIBIDOSDto } from 'src/dto/HASGSRDOCSRECIBIDOSDto';

import { DocumentosRecibidosService } from './documentos-recibidos.service';

@Controller('documentos-recibidos')
export class DocumentosRecibidosController {
    constructor(private readonly service: DocumentosRecibidosService) { }

    @MessagePattern('guardarGSRDocumentosRecibidos')
    @UseInterceptors(FileInterceptor('file'))
    async guardarGSRDocumentosRecibidos(
        @UploadedFile() file: Express.Multer.File,
        GSR_DOCUMENTOS: HASGSRDOCSRECIBIDOSDto
    ) {
        return this.service.guardarGSRDocumentosRecibidos(file, GSR_DOCUMENTOS);
    }
}
