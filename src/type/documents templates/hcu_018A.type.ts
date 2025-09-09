export type Hcu018ADocumentTemplate = {
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
        },

        fecha: string;
        talla: string;
        peso: string;
        grupo_factor: string;
    },

    B: {
        diagnostico: string,
        cie1: string,
        cx_propuesta: string,
        especialidad: string,
        dx_postoperatorio: string,
        cie2: string,
        cx_realizada: string,
        anestesiologo: string,
        ayudante1: string,
        instrumentista: string,
        quirofano: string,
        cirujano: string,
        ayudante2: string,
        circulante: string
    },

    C: {
        cabeza: boolean,
        organos_sentidos: boolean,
        cuello: boolean,
        columna: boolean,
        torax: boolean,
        abdomen: boolean,
        pelvis: boolean,
        extr_sup: boolean,
        extr_inf: boolean,
        perineal: boolean
    },

    D: {},

    E: {
        d_administradas1: string,
        d_administradas2: string,
        d_administradas3: string,
        d_administradas4: string,
        d_administradas5: string,
        d_administradas6: string,
        d_administradas7: string,
        d_administradas8: string,
        d_administradas9: string,
        d_administradas10: string,
        d_administradas11: string,
        d_administradas12: string
    },

    F: {
        general: {
            sistema: {
                abierto: boolean,
                semicerrado: boolean,
                cerrado: boolean
            },

            aparato: {
                circuito_circular: boolean,
                unidireccional: boolean
            }
        },

        vias_aereas: {
            mascara_facial: boolean,
            supraglotica: boolean,
            traqueotomo: boolean
        },

        intubacion: {
            nasal: boolean,
            oral: boolean,
            submentoneana: boolean,
            vision_directa: boolean,
            ciegas: boolean
        },

        tipo_tubo: {
            convencional: boolean,
            preformado_oral: boolean,
            preformado_nasal: boolean,
            reforzado: boolean
            doble_lumen: boolean,
            diametro: boolean,

            balon: {
                si: boolean,
                no: boolean
            },

            taponamiento: {
                si: boolean,
                no: boolean
            }
        },

        equipo_intubacion: {
            cormack: {
                I: boolean,
                II: boolean,
                III: boolean,
                IV: boolean
            }
        },

        induccion: {
            inhalatoria: boolean,
            intravenosa: boolean,            
        },

        mantenimiento: {
            inhalatoria: boolean,
            intravenosa: boolean,
            balanceada: boolean
        },
        

        regional: {
            asepsia: string,
            habon: string,
            local_asistida: string,
            intravenosa: string
        },

        troncular: {
            bloqueo_nervio: string,
            no_intentos: string,
            bloqueo_plexo: string,
            no_intentos_plexo: string,
            anestesico_local: string,
            coadyuvante: string,
            tipo_aguja: string,
            equipo: string,
            raquidea: boolean,
            epidural: string,
            caudal: string,
            cateter: string,
            tipo_aguja2: string,
            nro_aguja: string,
            nro_intentos: string,
            borbotaje: string,

            acceso: {
                medial: boolean,
                lateral: boolean,
                sitio_puncion: string
            },

            dermatoma: string,
            posicion: string
        }
    },

    G: {
        a_vasculares: {
            calibre: true,
            sitio: true,
        }[];
    }    

    H: {
        dextrosa_5: string,
        sangre: string,
        dextrosa_10: string,
        plasma: string,
        dextrosa_50: string,
        plaquetas: string,
        dextrosa_ss: string,
        crioprecipitados: string,
        ss_9: string,
        otros: string,
        lactato_ringer: string,
        expansores: string, 
        total: string
    },

    I: {
        sangrado: string,
        diuresis: string,
        otros: string,
        total: string,
        balance: string
    },

    J: {
        apgar: {
            feto_muerto: boolean,
            minuto_5: boolean,
            minuto_1: boolean,
            minuto_10: boolean
        }
    },

    K: {
        duracion_anestesia: string,
        duracion_cirugia: string
    },

    L: {
        hemodilucion: boolean,
        autotransfusion: boolean,
        hipotension: boolean,
        hipotermia: boolean,
        circulacion_extracorporea: boolean
    },

    M: {
        manta_termica: boolean,
        calentador_fluidos: boolean,
        otros: string
    },

    N: {
        actividad_sinpulso: boolean,
        arritmia: boolean,
        asistolia: boolean,
        bradicardia: boolean,
        tromboembolia: boolean,
        hipertermia: boolean,
        anafilaxia: boolean,
        isquemia: boolean,
        hipoxemia: boolean,
        neumotorax: boolean,
        broncoespasmo: boolean,
        despertar_prolongado: boolean,
        embolia_venosa: boolean,
        reaccion_transfusion: boolean,
        laringoespasmo: boolean,
        dificultad_tecnica: boolean,
        otros: string
    },

    O: {
        resultado_examenes: [
            {
                id: number,
                hora: '',
                ph: '',
                po2: '',
                pco2: '',
                hco3: '',
                eb: '',
                satO2: '',
                lactato: '',
                glucosa: '',
                na: '',
                k: '',
                cl: '',
                hcto: '',
                hb: '',
                otro: '',
            }
        ];
    }

    P: {
        observaciones: string
    },

    R: {
        condiciones_salida: {
            extubado: boolean,
            intubado: boolean
        },

        conducido: {
            cuidados_postanestesicos: boolean,
            cuidados_intensivos: boolean,
            morgue: boolean
        },

        const_vitales: {
            ta: boolean,
            fc: boolean,
            sat_O2: string,
            t: string
        }
    },

    S: {
        fecha: string,
        hora: string,
        primer_nombre_resp: string,
        primer_apellido_resp: string,
        segundo_apellido_resp: string,
        identificacion_resp: string
        firma_resp: string,
        sello_resp: string
    }
}
