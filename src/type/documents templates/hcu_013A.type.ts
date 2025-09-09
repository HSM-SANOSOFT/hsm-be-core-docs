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
            hospitalizacion: boolean
        },
        
        especialidad: string,
        
        prioridad: {
            urgente: boolean,
            rutina: boolean
        },

        hora_toma: string,
        fecha_toma: string
    },

    C: {
        histopatologia: boolean,
        citologia: boolean,
        rev_laminillas: boolean,
        transoperatorio: boolean,
        otros_estudios: boolean,

        descripcion: string
    },

    D: {
        cuadro_clinico: string,
        resultado_laboratorio: string,
        datos_imagen: string,
        tratamiento: string,
        obtencion_muestra: string
    },

    E: {
        diagnosticos: {
            descripcion: string,
            cie: string,
            pre: boolean,
            def: boolean
        }[];
    },

    F: {
        muestra_pieza: string
    },

    G: {
        material: {
            endocervix: boolean;
            exocervix: boolean;
            pared_vaginal: boolean;
            union_escamo: boolean;
            muñon_cervical: boolean;
        };

        anticoncepcion: {
            otro_inyectable: boolean,
            diu: boolean;
            ligadura: boolean;
            barrera: boolean;
            implante: boolean;
            otro: string; 
        };

        edad: {
            menarquia: string;        
            menopausia: string;         
            inicio_vida_sexual: string; 
        };

        terapia_hormonal: boolean,

        paridad: {
            gestas: string;
            partos: string;
            abortos: string;
            cesareas: string;
        };

        fechas: {
            fum: string;    
            ultimo_parto: string;
            ultima_citologia: string;
        };

        descripcion_macroscopica: string;
        dx_ultima_citologia: string;
    },

    H: {
        biologia_molecular: string 
    }
    
    I: {
        fecha: number,
        hora: number,
        primer_nombre: string,
        primer_apellido: string,
        segundo_apellido: string,
        numero_identificacion: number,
        firma_resp: string,
        sello_resp: string
    }
}