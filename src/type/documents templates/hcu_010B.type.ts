export type Hcu010BDocumentTemplate = {
    A_anv: {
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

    B_anv: {
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

    C_anv: {
        hematologico: {
            hcto: string,
            hb: string,
            vcm: string,
            reticulocitos: string,
            sedimentacion: string,
            hcm: string,
            drepanocitos: string,
            plaquetas: string,
            chcm: string,
            grupo_factor: string,
            leucocitos: string,
            hipocromia: string,
            coombs_directo: string,
            metam: string,
            basof: string,
            ansocitosis: string,
            coombs_indirecto: string,
            cayad: string,
            monoc: string,
            poiquilocit: string,
            tiempo_sangria: string,
            segme: string,
            linfo: string,
            microcitosis: string,
            protrombina: string,
            eosin: string,
            atipi: string,
            policromat: string,
            tiempo_parcial: string
        },

        coprologico: {
            color: string,
            hemoglobina: string,
            esporas: string,
            fibras: string,
            consist: string,
            glob_rojos: string,
            micelios: string,
            almidon: string,
            ph: string,
            polimorfos: string,
            moco: string,
            grasa: string,

            protozoarios: {
                descripcion: string,
                quiste: string,
                trofozoito: string,
                helmintos: string,
                huevo: string,
                larva: string
            }[];
        },

        uroanalisis: {
            elemental: {
                color: string,
                aspecto: string,
                densidad: string,
                ph: string,
                glucosa_orina: string,
                cetonas: string,
                bilirrubina: string,
                leucocitos_orina: string,
                nitritos: string,
                sangre: string,
                proteinas: string,
                urobilinogeno: string,
                acido_ascorbico: string
            },

            microscopico: {
                hematies: string,
                leucocitos: string,
                celulas_epiteliales: string,
                filamento_mucoso: string,
                bacterias: string,
                esporas_hongos: string,
                levaduras: string,
                uratos_amorfos: string,
                fosfato_amorfos: string,
                fosfato_triple: string,
                oxalato_calcio: string,
                cilindros_granulosos: string,
                acido_urico: string,
                otros_cristales: string,
                trichomonas: string,
                parasitos: string
            }
        },

        quimica: {
            glucosa_ayunas: string,
            piruvica: string,
            glucosa_2hrs: string,
            oxalacetica: string,
            urea: string,
            f_alcalina: string,
            creatinina: string,
            f_acida: string,
            bilirrubina_total: string,
            colesterol_total: string,
            bilirrubina_directa: string,
            colesterol_hdl: string,
            acido_urico: string,
            colesterol_ldl: string,
            proteina_total: string,
            trigliceridos: string,
            albumina: string,
            hierro_serico: string,
            globulina: string,
            amilasa: string
        },

        serologia: {
            vdrl: string,
            latex: string,
            febriles: string,
            asto: string
        },

        bacteriologia: string,
        otros: string
    },

    D_anv: {
        fecha: number,
        hora: number,
        nombres_apellidos: string,
        cedula_resp: string,
        firma_resp: string
    },

    A_rev: {
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

    B_rev: {
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

    C_rev: {

    },

    D_rev: {
        fecha: string,
        hora: string,
        nombres_apellidos_prof: string,
        firma_prof: string
    }
}