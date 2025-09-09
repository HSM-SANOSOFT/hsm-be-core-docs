export type Hcu012BDocumentTemplate = {
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
            h: boolean;
            d: boolean;
            m: boolean;
            a: boolean;
        };
    },

    B: {
        personal_realiza: string,
        fecha_realizacion: number,
        profesional_solicita: string,

        servicio: {
            emergencia: boolean,
            consulta_externa: boolean,
            hospitalizacion:true
        },

        especialidad: string
    },

    C: {
        rx_convencional: boolean,
        rx_portatil: boolean,
        tomografia: boolean,
        resonancia: boolean,
        ecografia: boolean,
        mamografia: boolean,
        procedimiento: boolean,
        otro: boolean,
        sedacion: boolean,
        si: boolean,
        no: boolean,

        descripcion: string
    },

    D: {
        hallazgos: string
    },

    E: {
        conclusiones: string
    },

    F: {
        fecha: number,
        hora: number,
        nombres_apellidos_resp: string,
        cedula_resp: number,
        firma_resp: string
    }
}