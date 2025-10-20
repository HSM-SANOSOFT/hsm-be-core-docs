export type Hcu058DocumentTemplate = {
  //DATOS DEL ESTABLECIMIENTO Y USUARIO/PACIENTE
  A: {
    institucion_sistema: string;
    unicodigo: number;
    establecimiento_salud: string;
    numero_historia_clinica: string;
    numero_archivo: string;
    },

    B: {
      primer_apellido: string,
      segundo_apellido: string,
      primer_nombre: string,
      segundo_nombre: string,
      sexo: string,
      telefono_fijo: string,
      telefono_celular: string,
      correo_electronico: string,
      fecha_nacimiento: string,
      lugar_nacimiento: string,
      nacionalidad: string,
      edad: string

      identificacion: {
        cc_ci: boolean,
        pas: boolean,
        carne: boolean,
        sd: boolean
      },

      estado_civil: {
        sol: boolean,
        cas: boolean,
        div: boolean,
        viu: boolean,
        un: boolean,
        u_h: boolean,
        na: boolean
      },

      condicion_edad: {
        h: boolean,
        d: boolean,
        m: boolean,
        a: boolean
      },

      residencia: {
        provincia: string,
        canton: string,
        parroquia: string,
        sector: string,
        calle_principal: string,
        calle_secundaria: string,
        referencia: string
      }
    },

    C: {
      nombre: string,
      direccion: string,
      telefono: string,
      correo_electronico: string,

      parentesco: {
        hijo: boolean,
        conyuge: boolean,
        padre: boolean,
        nieto: boolean,
        yerno: boolean,
        no_tiene: boolean,
        otro: string
      }
    },

    D: {
      diagnostico: {
        descripcion: string,
        cie: string,
        pre: boolean,
        def: boolean
      }[];

      patologia: {
        oncologico: boolean,
        no_oncologico: boolean
      }
    },

    E: {
      motivo_consulta: string
    },

    F: {
      problema_actual: string
    },

    G: {
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

    H: {
      alcohol: boolean,
      tabaco: boolean,
      drogas: boolean,
      aficiones: boolean,
      caracter: boolean,
      creencias: boolean,
      valores: boolean,
      alimentos: boolean,
      medicamentos: boolean,
      miccional: boolean,
      defecatorios: boolean,
      actividad_fisica: boolean,
      otros: boolean,

      descripcion_habitos: string
    },

    I: {
      paciente: {
        conoce_diag: {
          si: boolean,
          no: boolean
        },

        conoce_pron: {
          si: boolean,
          no: boolean
        },

        volun_antic: {
          si: boolean,
          no: boolean
        },

        test_vital: {
          si: boolean,
          no: boolean
        }
      },

      familiar: {
        diag_pronos: {
          si: boolean,
          no: boolean
        }
      }
    },

    J: {
      temperatura: string,
      presion_arterial: string,
      pulso: string,
      frecuencia_respiratoria: string,
      peso: string
    },

    K: {
      examen_fisico: string

      examen_img: string
    },

    L: {
      fecha_evaluacion: string,

      sintomas: {
        dolor: string,
        cansancio: string,
        nausea: string,
        depresion: string,
        ansiedad: string,
        somnolencia: string,
        hiporexia: string,
        disnea: string,
        dificultad_dormir: string,
        estreñimiento: string
      }
    },

    M: {
      fecha_evaluacion: string,
      observaciones: string,

      componentes: {
        kps: string,
        barthel: string,
        pfeiffer: string,
        dme: string,
        gijon: string,
        zarit: string,
        nec_espiritual: string
      }
    }

    N: {
      familiograma: string
    },

    O: {
      diagnostico: {
        descripcion: string,
        cie: string,
        pre: boolean,
        def: boolean
      }[];
    },

    P: {
      plan_tratamiento: string,

      prescripcion_opioide: {
        inicia: boolean,
        continua: boolean
      }
    },

    Q: {
      nombre: string,
      parentesco: string
    },

    R: {
      fecha: string,
      hora: string,
      primer_nombre: string,
      primer_apellido: string,
      segundo_apellido: string,
      numero_identificacion: string,
      firma: string,
      sello: string
    }
  }
  