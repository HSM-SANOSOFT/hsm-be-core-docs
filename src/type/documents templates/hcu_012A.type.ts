export type Hcu012ADocumentTemplate = {
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
        servicio: {
            emergencia: boolean,
            consulta_externa: boolean,
            hospitalizacion:true
        },

       especialidad: string,
       sala: string,
       cama: string,

       prioridad: {
        urgente: boolean,
        rutina: boolean,
        control: boolean
       }
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
        fum: string,

        paciente: {
            si: boolean,
            no: boolean
        },

        descripcion: string
    },

    E: {
        resumen_clinico: string
    },

    F: {
        diagnosticos: {
            descripcion: string;
            cie: string;
            pre: boolean;
            def: boolean;
        }[];
    }

    G: {
        fecha: number,
        hora: number,
        nombres_apellidos_med: string,
        cedula_med: number,
        firma_med: string
    }
}