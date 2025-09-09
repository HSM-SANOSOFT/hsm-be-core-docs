export type Hcu010BDocumentTemplate = {
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
    },

    B: {
        diagnostico: string,
        cie: string

        servicio: {
            emergencia: boolean,
            consulta_ext: boolean,
            hospitalizacion: boolean
        },

        especialidad: string,
        cama: string,
        sala: string,

        prioridad: {
            urgente: boolean,
            rutina: boolean,
            control: boolean
        }
    },

    D: {
        fecha: number,
        hora: number,
        nombres_apellidos: string,
        cedula_resp: string,
        firma_resp: string
    }

}