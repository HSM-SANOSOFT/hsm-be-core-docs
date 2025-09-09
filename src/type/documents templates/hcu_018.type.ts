export type Hcu018DocumentTemplate = {
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
    },

    B: {
        diagnostico: string,
        cie: string,
        procedimiento: string,
        descripcion_procedimiento: string,
        
        electiva: boolean,
        emergencia: boolean,
        urgencia: boolean,

        riesgo_quirurgico: {
            bajo: boolean,
            moderado: boolean,
            alto: boolean

        }
    },

    C: {
        antecedentesPatologicos: [
            {
                id: number,
                diagnostico: string,
                tiempo_evolucion: string,
                tratamiento: string
            },
            {
                id: number,
                diagnostico: string,
                tiempo_evolucion: string,
                tratamiento: string
            },
            {
                id: number,
                diagnostico: string,
                tiempo_evolucion: string,
                tratamiento: string
            },
            {
                id: number,
                diagnostico: string,
                tiempo_evolucion: string,
                tratamiento: string
            },
            {
                id: number,
                diagnostico: string,
                tiempo_evolucion: string,
                tratamiento: string
            },
        ],

        anestesicos: string,
        quirurgicos: string,
        alergicos: string,
        transfusiones: string,
        habitos: string,

        antecedentes_patologicos_fam: string
    },

    D: {
        constantes_vitales:{
            ta: string,
            fc: string,
            fr: string,
            temp: string,
            sat: string,
            glasgow: string
        },

        antropometria:{
            peso: string,
            talla: string,
            imc: string
        },

        via_aerea: {
            apertura_bucal: {
                menor_2: boolean,
                entre_2: boolean,
                entre2_3: boolean,
                mayor_3: boolean
            },

            distancia_tiromentoneana: {
                menor_6: boolean,
                entre_6: boolean,
                mayor6_5: boolean
            },

            mallampati: {
                clase1: boolean,
                clase2: boolean,
                clase3: boolean,
                clase4: boolean
            },

            protrusion_mandibular: {
                menor_0: boolean,
                en0: boolean,
                mayor_0: boolean
            },

            perimetro_cervical: {
                menor_40: boolean,
                mayor_40: boolean
            },

            movilidad_cervical: {
                menor_35: boolean,
                mayor_35: boolean
            },

            intubacion_dificil: {
                si: boolean,
                no: boolean
            },

            patologia_intubacion: {
                si: boolean,
                no: boolean
            }
        },

        otros: string,

        torax: string,
        corazon: string,
        pulmones: string,
        abdomen: string,
        extremidades: string,
        sistema_nervioso: string,
        mets: string
    },

    E: {
        hemograma: {
            hcto: string,
            hb: string,
            plaquetas: string,
            tp: string,
            ttp: string,
            inr: string,
            leucocitos: string
        },

        tipificacion: {
            grupo: string,
            factor: string
        },

        quimica_sanguinea: {
            glucosa: string,
            urea: string,
            creatinina: string,
            otros: string
        },

        perfil_hepatico:{
            ast: string,
            alt: string,
            fa: string,
            ldh: string,
            bt: string,
            bd: string,
            bi: string
        },

        ionograma: {
            na: string,
            k: string,
            cl: string,
            ca: string,
            mg: string
        },

        gasometria: {
            ph: string,
            po2: string,
            pco2: string,
            hco3: string,
            eb: string,
            sat02: string,
            lactato: string
        },

        hormonas: {
            t4: string,
            tsh: string,

            prueba_embarazo: {
                si: boolean,
                no: boolean
            }
        },

        orina:{
            ph: string,
            densidad: string,
            bacterias: string,
            leucocitos: string,
            piocitos: string,
            hematies: string,
            glucosa: string
        },

        ekg: string,
        rx_torax: string,
        espirometria: string,
        otros: string
    },

    F: {
        estado_fisico: {
            I: boolean,
            II: boolean,
            III: boolean,
            IV: boolean,
            V: boolean
            VI: boolean
        },

        riesgo_cardiaco: string,
        riesgo_pulmonar: string,
        riesgo_tromboembolico: string,
        otros: string
    },

    G: {
        liq_claros: string,
        leche_formula: string,
        leche_materna: string,
        solidos: string
    },

    H: {
        indicaciones: string
    },

    I: {
        plan_anestesico: string
    },

    J: {
        observaciones: string
    },

    K: {
        fecha: string,
        hora: string,
        primer_nombre: string,
        primer_apellido: string,
        segundo_apellido: string,
        numero_identificacion_resp: string,
        firma_resp: string,
        sello_resp: string
    }
}