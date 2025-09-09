export type Hcu003DocumentTemplate = {
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
        motivo_consulta: string
    },

    C: {
        alergia_medicamentos: boolean,
        otras_alergias: boolean,
        vacunas: boolean,
        patologias_clinicas: boolean,
        medicacion_habitual: boolean,
        quirurgicos: boolean,
        habitos: boolean,
        condicion_socioeconomica: boolean,
        discapacidad: boolean,
        religion: boolean,
        tipificacion_sanguinea: string,

        obstetricos_andrologicos: {
            edad_menarquia: number,
            edad_menospausia: number,
            ciclos: number,
            inicio_vida_sexual: number,
            num_gestas: number,
            num_partos: number,
            num_abortos: number,
            num_cesareas: number,
            num_hijos_vivos: number,
            fecha_ult_menstruacion: number,
            fecha_ult_parto: number,
            fecha_ult_citologia_cervical: number,
            fecha_ult_colposcopia: number,
            fecha_ult_mamografia: number,
            metodo_planificacion: boolean,
            terapia_hormonal: string,
            fecha_ult_antigeno_prostatico: string,
            fecha_ult_eco_prostatico: string,
        },

        descripcion_antecedentes: string
    },

    D:{
        cardiopatia: boolean,
        hipertension: boolean,
        enf_c_vascular: boolean,
        endocrino_metabolico: boolean,
        cancer: boolean,
        tuberculosis: boolean,
        enf_mental: boolean,
        enf_infecciosa: boolean,
        mal_formacion: boolean,
        otro: boolean,

        descripcion_antecedentes: string
    },

    E: {
        enfermedad_actual: string
    },

    F: {
        piel_anexos: boolean,
        organos_sentidos: boolean,
        respiratorio: boolean,
        cardio_vascular: boolean,
        digestivo: boolean,
        genito_urinario: boolean,
        musculo_esqueletico: boolean,
        endocrino: boolean,
        hemo_linfatico: boolean,
        nervioso: boolean,

        descripcion_revision: string
    }

    G:{
        temperatura: string,
        presion_arterial: string,
        pulso: string,
        frecuencia_respiratoria: number,
        peso: number,
        talla: number,
        imc: number,
        perimetro_cefalico: number,
        pulsioximetria: number
    },

    H:{
        regional:{
            piel_faneras: boolean,
            cabeza: boolean,
            ojos: boolean,
            oidos: boolean,
            nariz: boolean,
            boca: boolean,
            oro_faringe: boolean,
            cuello: boolean,
            axilas_mamas: boolean,
            torax: boolean,
            abdomen: boolean,
            columna: boolean,
            ingle_perine: boolean,
            miembros_superiores: boolean,
            miembros_inferiores: boolean,
            descripcion_regional: string
        },
        sistemico:{
            organos_sentidos: boolean,
            respiratorio: boolean,
            cardio_vascular: boolean,
            digestivo: boolean,
            genital: boolean,
            urinario: boolean,
            musculo_esqueletico: boolean,
            endocrino: boolean,
            hemo_linfatico: boolean,
            neurologico: boolean,
            descripcion: string 
        }
    },

    I: {
        analisis: string,
    },

    J: {
      diagnosticos: {
        descripcion: string;
        cie: string;
        pre: boolean;
        def: boolean;    
      }[];
    },

    K: {
        plan_tratamiento: string

    },

    L: {
        fecha: string;
        hora: string;
        nombres_med: string;
        primer_apellido_med: string;
        segundo_apellido_med: string;
        numero_identificacion_med: number;
        firma_med: string;
        sello_med: string;
    }
} 