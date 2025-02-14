import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsObject, IsString } from 'class-validator';

export class HASGSRDOCSRECIBIDOSDto {
    @IsString()
    @IsNotEmpty()
    postulacion;

    @IsString()
    @IsNotEmpty()
    DOCUMENTO: string;

    @IsString()
    @IsNotEmpty()
    Tipo_documento: string;

    @IsString()
    @IsNotEmpty()
    ruta: string;
}
