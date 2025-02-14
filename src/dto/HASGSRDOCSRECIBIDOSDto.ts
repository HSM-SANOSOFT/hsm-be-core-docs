import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsObject, IsString } from 'class-validator';

export class HASGSRDOCSRECIBIDOSDto {
    @IsString()
    @IsNotEmpty()
    POSTULACION;

    @IsString()
    @IsNotEmpty()
    DOCUMENTO: string;

    @IsString()
    @IsNotEmpty()
    TIPO_DOCUMENTO: string;

    @IsString()
    @IsNotEmpty()
    RUTA: string;
}
