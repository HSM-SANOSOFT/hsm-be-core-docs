export type Hcu017DocumentTemplate = {
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
        pre_operatorio: [{
            descripcion: string;
            cie: string;
        }];
        post_operatorio: [{
            descripcion: string;
            cie: string;
        }];
    }

    C: {
        procedimiento: {
            electiva: boolean;
            emergencia: boolean;
            urgencia: boolean;
        },

        proyectado: {
            descripcion1: string;
            descripcion2: string;
        },

        realizado: {
            descripcion1: string;
            descripcion2: string;
            descripcion3: string;
            descripcion4: string;
            descripcion5: string;
            descripcion6: string;
        },
    },

    D: {
        cirujano1: string,
        instrumentista: string,
        cirujano2: string,
        circulante: string,
        primer_ayudante: string,
        anestesiologo: string,
        segundo_ayudante: string,
        ayudante_anestesia: string,
        tercer_ayudante: string,
        otros: string,
    },

    E: {
        general: boolean,
        regional: boolean,
        sedacion: boolean,
        otros: boolean,
    },

    F: {
        fecha_operacion: {
            dia: number,
            mes: number,
            año: number,
            hora_inicio: string,
            hora_final: string
        },

        dieresis: string,
        exposicion: string,
        hallazgo_quirurgico: string,
        procedimiento_quirurgico: string,
        
    },

    G: {
        complicaciones: string,
        
        perdida_sanguinea: string,
        sangrado_aprox: string,

        material_protesico: {
            si: boolean,
            no: boolean
        }
    },

    H: {
        transquirurgico: string,

        biopsia_congelacion:{
            si: boolean,
            no: boolean,
            resultado: string
        },

        histopatologico: {
            si: boolean,
            no: boolean,
            muestra: string
        }
    },

    I: {
        diagrama_procedimiento: string
    },

    J: {
        profesionales: [
            {
                nombre_apellidos: string,
                especialidad: string,
                firma: string,
                sello_identificacion: string
            },
            {
                nombre_apellidos: string,
                especialidad: string,
                firma: string,
                sello_identificacion: string
            },
            {
                nombre_apellidos: string,
                especialidad: string,
                firma: string,
                sello_identificacion: string
            },
            {
                nombre_apellidos: string,
                especialidad: string,
                firma: string,
                sello_identificacion: string
            }
        ]
    }
}