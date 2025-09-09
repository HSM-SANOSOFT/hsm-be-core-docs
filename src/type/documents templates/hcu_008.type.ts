export type Hcu008DocumentTemplate = {
    //DATOS DEL ESTABLECIMIENTO Y USUARIO/PACIENTE
    A: {
        institucion_sistema: string;
        unicodigo: number;
        establecimiento_salud: string;
        numero_historia_clinica: string;
        numero_archivo: number;
    }

    B:{
        registro_admision: string,

        fecha_admision: string;
        nombre_apellido_admisionista: string;   
        historia_clinica_establecimiento: {
            si: boolean;
            no: boolean;
        },

        primer_apellido: string,
        segundo_apellido: string,
        primer_nombre: string,
        segundo_nombre: string,

        documento_identificacion:{
            cedula: boolean,
            pasaporte: boolean,
            carne: boolean,
            sindatos: boolean
        },

        "estado_civil":{
            soltero: boolean,
            casado: boolean,
            divorciado: boolean,
            viudo: boolean,
            unido: boolean,
            union_hecho: boolean,
            n_a: boolean
        },

        "sexo":string,
        "num_telefono":string,
        "num_celular":number,
        "fecha_nacimiento":number,
        "lugar_nacimiento":string,
        "nacionalidad":string,
        "edad":number,

        "condicion_edad": {
           "h": false,
           "d": false,
           "m": false,
           "a": true
        },

        "grupo_prioritario":{
            "si": boolean,
            "no": boolean
        },

        "especifique":"",

        "autoidentificacion_etnica":"",
        "nacionalidad_etnica":"",
        "pueblos":"",
        "nivel_educacion":"",

        "seguro_prrincipal":{
            "iess_g":"",
            "iess_c":"",
            "isspol":"",
            "issfa":"",
            "privado":""
        },

        "estado_nivel_educacion":"",
        "tipo_empresa_trabajo":"",
        "ocupacion":"",

        "residencia":{
            "provincia":"",
            "canton":"",
            "parroquia":"",
            "sector":"",
            "calle_principal":"",
            "calle_secundaria":"",
            "referencia":""
        },

        "nombre_familiar":"",
        "parentesco":"",
        "direccion_parentesco":"",
        "telefono_parentesco":"",

        "forma_llegada":{
            "ambulatorio":"",
            "ambulancia":"",
            "otro_transporte":""
        },

        "fuente_informacicon":"",
        "persona_entrega_pcte":"",
        "numero_persona_entrega_pcte":""
    },

    C:  {
        fecha: number,
        hora: number,

        "condicion_llegada": {
            estable: boolean,
            inestable: boolean,
            fallecido: boolean
        },

      motivo_atencion:string
    }

    "D": {
        "fecha":"",
        "hora":"",
        "lugar_evento":"",
        "direccion_evento":"",
        "custodia_policial": {
            "si":false,
            "no":true
        },

        "mecanismo_evento":{
            "accidente_transito": boolean,
            "caida": boolean,
            "quemadura": boolean,
            "mordedura": boolean,
            "ahogamiento": boolean,
            "cuerpo_extraño": boolean,
            "aplastamiento": boolean,
            "otro_accidente": boolean,
            "violencia_arma": boolean,
            "violencia_cortopunzante": boolean,
            "violencia_riña": boolean,
            "violencia_familiar": boolean,
            "presunta_violencia_fisica": boolean,
            "presunta_violencia_psico": boolean,
            "presunta_violencia_sexual": boolean,
            "notificacion": boolean,
            "intoxicacion_alcoholica": boolean,
            "intoxicacion_alimentaria": boolean,
            "intoxicacion_drogas": boolean,
            "inhalacion_gases": boolean,
            "otra_intoxicacion": boolean,
            "picadura": boolean,
            "envenenamiento": boolean,
            "anafilaxia": boolean   
        }
        "observaciones": string
    },

    E: {
        no_aplica: boolean

        antecedentes: {
           alergicos: boolean,
            "clinicos": boolean,
            "ginecologicos": boolean,
            "traumatologicos": boolean,
            "pediatricos": boolean,
            "quirurgicos": boolean,
            "farmacologicos": boolean,
            "habitos": boolean,
            "familiares": boolean,
            "otros": boolean
        }

        descripcion_otros: string
    },

    F: {
        problema_actual: string
    },

    G: {
            sin_cons_vitales: "",
            presion_arterial: "",
            pulso: "",
            frecuencia_respitaroria: "",
            pulsioximetria: "",
            perimetro_cefalico: "",
            peso: "",
            talla: "",
            glicemia_capilar: "",

        glasgow: {
            ocular: "",
            verbal: "",
            motora: "",
            reacc_pupila_dere: "",
            reacc_pupila_izq: "",
            llenado_capilar: ""
        }
    },

    H: {
        examen_fisico:{
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
        },

        descripcion_examen: string
        
    },

    I: {
        examen_trauma_critico: string
       },

    J: {
        no_aplica: boolean,

        embarazo:{
            num_gestas:"",
            num_partos:"",
            num_abortos:"",
            num_cesareas:"",
            fum:"",
            semanas_gestacion:"",
            movimiento_fetal:"",
            frec_cardiaca_fetal:"",
            ruptura_membranas:"",
            tiempo:"",
            afu: "",
            presentacion:"",
            dilatacion:"",
            borramiento:"",
            plano:"",
            pelvis_viable: "",
            sangrado_vaginal:"",
            contracciones:"",
            score_mama:""
        },

        descripcion_parto: ""
    },
    
    K: {
        no_aplica: boolean,

        examen_complementario:{
            biometria: boolean,
            uroanalisis: boolean,
            quimica_sanguinea: boolean,
            electrolitos: boolean,
            gasometria: boolean,
            electro_cardiograma: boolean,
            endoscopia: boolean,
            rx_torax: boolean,
            rx_abdomen: boolean,
            rx_osea: boolean,
            ecografia_abdomen: boolean,
            ecografia_pelvica: boolean,
            tomografia: boolean,
            resonancia: boolean,
            interconsulta: boolean,
            otros: boolean
        },

        observaciones: string
    },

     L: {
      diagnosticos_presuntivos: {
        descripcion: string;
        cie: string;    
      }[];

    diagnosticos_definitivos: {
        descripcion: string;
        cie: string;    
      }[]
    },

    N: {
        plan_tratamiento: string
    },

     O: {
        vivo: boolean,
        estable: boolean,
        inestable: boolean,
        fallecido: boolean,
        alta_definitiva: boolean,
        consulta_externa: boolean,
        observacion_emergencia: boolean,
        hospitalizacion: true,
        referencia: boolean,
        referencia_inversa: boolean,
        derivacion: boolean,
        establecimiento: boolean,

        observaciones: string,
        dias_reposo: number
    },
    
    P: {
        fecha: string,
        hora: string,
        nombres: string,
        primer_apellido_med: string,
        segundo_apellido_med: string,
        numero_identificacion_med: number,
        firma_med: string,
        sello_med: string
    }
}


