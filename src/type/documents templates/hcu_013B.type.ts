export type Hcu013ADocumentTemplate = {
    //DATOS DEL ESTABLECIMIENTO Y USUARIO/PACIENTE
    A: {
        institucion_sistema: string;
        unicodigo: number;
        establecimiento_salud: string;
        numero_historia_clinica: string;
        numero_archivo: string;
        primer_apellido: string;
        segundo_apellido: string;
        primer_nombre: string;
        segundo_nombre: string;
        sexo: string;
        fecha_nacimiento: string,
        edad: string;
        condicion_edad: {
            m1: boolean;
            d: boolean;
            m2: boolean;
            a: boolean;
        };
    }

    B: {
        establecimiento_solicitante: string,
        profesional_solicitante: string,
        especialidad: string,
        codigo_muestra: string
    },

    C: {
        descripcion_macroscopica: string
    },

    D: {
        descripcion_microscopica: string
    },

    E: {
        normal: boolean,
        lie_bajo: boolean,
        lie_alto: boolean,
        ca: boolean,

        muestra_inadecuada: boolean,
        hongos: boolean,
        eritrocitos: boolean,
        flora_bacteriana: boolean,
        histiocitos: boolean,
        numero_muestra: boolean,
        fecha_proceso: string,

        observaciones: string,
        descripcion: string
    },

    "F": {
        diagnostico: string
    },

    "G": {
        recomendaciones: string
    },

    "H": {
        fecha: number,
        hora: number,
        primer_nombre: string,
        primer_apellido: string,
        segundo_apellido: string,
        documento_identificacion: string,
        firma_resp: string,
        sello_resp: string
    }
}