import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class HASGSRDOCSRECIBIDOSDto {
    @IsNumber()
    @IsNotEmpty()
    POSTULACION: number;

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
