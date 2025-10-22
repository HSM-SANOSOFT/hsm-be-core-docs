export type Hcu056DocumentTemplate = {
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
    sexo: string,
    edad: number

    acompaniante: {
      no: boolean,
      pareja: boolean,
      madre: boolean,
      padre: boolean,
      amigo: boolean,
      pariente: boolean,
      otros: string
    }
  },

  B: {
    motivo_consulta_adolescente: string,
    motivo_consulta_acompaniante: string
  },

  C: {
    enfermedad_actual: string
  },

  D: {
    perinatales_normales: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    crecimiento_normal: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    desarrollo_normal: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    vacunas_completas: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    enf_cronicas: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    enf_infecto_contagiosas: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    trastorno_psicologico: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    medicinas_sustancias: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    accidentes_intoxicacion: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    alergias: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    infecc_recurrentes: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    cx_hosp: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    presunta_violencia: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    judiciales: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    describa: string
  },

  E: {
    diabetes: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    obesidad: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    alergias: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    cardio_vasculares: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    cancer: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    infecciones: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    alcohol_drogas: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    violencia_familiar: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    madre_adolescente: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    judiciales: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    describa: string
  },

  F: {
    familia: {
      convive: {
        madre: {
          si: boolean,
          no: boolean
        },

        padre: {
          si: boolean,
          no: boolean
        },

        madrastra: {
          si: boolean,
          no: boolean
        },

        padrastro: {
          si: boolean,
          no: boolean
        },

        hermanos: {
          si: boolean,
          no: boolean
        },

        pareja: {
          si: boolean,
          no: boolean
        },

        hijo: {
          si: boolean,
          no: boolean
        },

        solo: {
          si: boolean,
          no: boolean
        },

        otros: {
          si: boolean,
          no: boolean
        }
      },

      vive: {
        institucion: {
          si: boolean,
          no: boolean
        },

        calle: {
          si: boolean,
          no: boolean
        },

        casa: {
          si: boolean,
          no: boolean
        }
      }
    },

    nivel_instruccion: {
      analfabeto: {
        padre_sust: boolean,
        madre_sust: boolean
      },

      inicial: {
        padre_sust: boolean,
        madre_sust: boolean
      },

      basica: {
        padre_sust: boolean,
        madre_sust: boolean
      },

      bachillerato: {
        padre_sust: boolean,
        madre_sust: boolean
      },

      tecnico: {
        padre_sust: boolean,
        madre_sust: boolean
      },

      tercer_nivel: {
        padre_sust: boolean,
        madre_sust: boolean
      },

      cuarto_nivel: {
        padre_sust: boolean,
        madre_sust: boolean
      }
    },

    trabajo: {
      ninguno: {
        padre_sust: boolean,
        madre_sust: boolean
      },

      estable: {
        padre_sust: boolean,
        madre_sust: boolean
      },

      no_estable: {
        padre_sust: boolean,
        madre_sust: boolean
      },

      especifique: string
    },

    percepcion: {
      buena: boolean,
      regular: boolean,
      mala: boolean,
      no_hay: boolean
    },

    familiograma: {
      descripcion_img: string,
      observaciones: string
    },

    vivienda: {
      energia_electrica: {
        si: boolean,
        no: boolean
      },

      agua: {
        hogar: boolean,
        fuera_hogar: boolean
      },

      excretas: {
        hogar: boolean,
        fuera_hogar: boolean
      },

      num_cuartos: string,
      num_pers_hab: string,
      comp_cama: string,

      observacion: string
    }
  },

  G: {
    estudia: {
      si: boolean,
      no: boolean
    },

    nombre_institucion: string,

    nivel_curso: {
      ninguno: boolean,
      bachillerato: boolean,
      basico: boolean,
      tercer_nivel: boolean
    },

    grado: string,

    violencia: {
      si: boolean,
      no: boolean
    },

    anios_repetidos: string,
    causas_anio_rep: string,

    desercion: {
      si: boolean,
      no: boolean,

      causa: string
    },

    observacion: string
  },

  H: {
    actividad: {
      trabaja: boolean,
      primera_vez: boolean,
      no_busca: boolean,
      desocupado: boolean
    },

    inicio_trabajo: string,
    trabajo: string,

    horas_trabajo: {
      manana: boolean,
      fin_semana: boolean,
      noche: boolean,
      tarde: boolean,
      todo_dia: boolean,
      n_c: boolean
    },

    razon_trabajo: {
      economica: boolean,
      me_gusta: boolean,
      autonomia: boolean,
      n_c: boolean
    },

    trabajo_legalizado: {
      si: boolean,
      no:boolean,
      n_c: boolean
    },

    trabajo_insalubre: {
      si: boolean,
      no: boolean,
      n_c: boolean
    },

    observaciones: string
  },

  I: {
    aceptacion: {
      aceptado: boolean,
      rechazado: boolean,
      ignorado: boolean,
      no_conoce: boolean
    },

    pareja: {
      si: boolean,
      no: boolean
    },

    amigos: {
      si: boolean,
      no: boolean
    },

    act_grupal: {
      si: boolean,
      no: boolean,
      horas_dias: string
    },

    deporte: {
      si: boolean,
      no: boolean,
      horas_dias: string
    },

    television: {
      si: boolean,
      no: boolean,
      horas_dias: string
    },

    computador: {
      si: boolean,
      no: boolean,
      horas_dias: string
    },

    redes_sociales: {
      si: boolean,
      no: boolean,
      horas_dias: string
    },

    celular: {
      si: boolean,
      no: boolean,
      horas_dias: string
    },

    videojuego: {
      si: boolean,
      no: boolean,
      horas_dias: string
    },

    otras_actividades: {
      si: boolean,
      no: boolean,
      cuales: string,
      horas_dias: string
    },

    
    observaciones: string
  },
  
  J: {
    horas_sueno: {
      menos_8h: boolean,
      mas_8h: boolean
    },

    alim_saludable:{
      si: boolean,
      no: boolean
    },

    comida_dia:{
      si: boolean,
      no: boolean,
      cuantas: string
    },

    tabaco:{
      si: boolean,
      no: boolean,
      cuantos: string,
      frecuencia: string
    },

    inicio_tabaco: string,

    alcohol:{
      si: boolean,
      no: boolean
    },

    inicio_alcohol:{
      anios: string,
      frecuencia: string
    },

    otras_sustancias:{
      si: boolean,
      no: boolean,
      cual: string,
      frecuencia: string
    },

    conduce_vehiculo:{
      si: boolean,
      no: boolean,
      cual: string
    },

    observaciones: string
  },

  K: {
    menarquia: {
      edad: string,
      no_conoce: string
    },

    ult_mens: {
      no_conoce: boolean,
      no_corresponde: boolean,
      anio: string,
      mes: string,
      dia: string
    },

    ciclos_regulares: {
      si: boolean,
      no: boolean,
      n_c: string
    },

    dismenorrea: {
      si: boolean,
      no: boolean,
      n_c: string
    },

    secr_gen: {
      si: boolean,
      no: boolean
    },

    infecc_sex: {
      si: boolean,
      no: boolean,
      especifique: string
    },

    otros: {
      embarazos: string,
      partos: string,
      cesareas: string,
      abortos: string,
      hijos_vivos: string,
      hijos_muertos: string
    },

    observaciones: string
  },

  L: {
    asesoria: {
      si: boolean,
      no: boolean
    },

    tipo_relaciones:{
      no: boolean,
      homosexual: boolean,
      bisexual: boolean,
      heterosexual: boolean
    },

    pareja: {
      unica: boolean,
      n_c: string,
      varias: string
    },

    inicio_relac:{
      anios: string,

      voluntarias: {
        si: boolean,
        no: boolean,
        n_c: boolean
      }
    },

    disfuncion_sexual: {
      si: boolean,
      n_c: string,
      no: boolean
    },

    anticonceptivo: {
      si: boolean,
      no: boolean,
      cual: string
    },

    apoyo_pareja: {
      siempre: boolean,
      nunca: boolean,
      a_veces: boolean
    },

    violencia_sexual: {
      si: boolean,
      n_c: boolean,
      no: boolean
    },

    observaciones: string
  },

  M: {
    imagen_corporal: {
      conforme:boolean,
      crea_preocupacion: boolean,
      impide_relacion: string
    },

    estado_animo: {
      bueno: boolean,
      triste: boolean,
      nervioso: boolean,
      alegre: boolean,
      timido: boolean,
      otro: boolean
    },

    referente_personal: {
      madre: boolean,
      otro_familiar: boolean,
      ninguno: string,
      padre: boolean,
      fuera_hogar: boolean
    },

    proyecto_vida: {
      claro: boolean,
      confuso: boolean,
      ninguno: string
    },

    observaciones: string
  },

  N: {
    temperatura: string,
    presion_arterial: string,
    pulso: string,
    frecuencia_respiratoria: string,
    peso: string,
    talla: string,
    imc: string,
    perimetro_cefalico: string,
    pulsioximetria: string
  },

  O: {
    aspecto_normal: boolean,
    agudeza_auditiva: boolean,
    torax_mamas: boolean,
    abdomen: boolean,
    miembros_superiores: boolean,
    piel_faneras: boolean,
    boca_dientes: boolean,
    cardio_pulmonar: boolean,
    genito_urinario: boolean,
    miembros_inferiores: boolean,
    agudeza_visual: boolean,
    cuello_tiroides: boolean,
    columna_vertebral: boolean,
    ano_rectal: boolean,
    neurologico: boolean,
    mamas: boolean,
    genitales: boolean,
    vello_pubico: boolean,

    observaciones: string,
    observaciones_fisico: string
  },

  P: {
    diagnostico: {
      descripcion: string,
      cie: string,
      pre: boolean,
      def: boolean
    }[];
  },

  Q: {
    plan_tratamiento: string
  },

  R: {
    fecha: string,
    hora: string,
    primer_nombre: string,
    primer_apellido: string,
    segundo_apellido: string,
    identificacion: string,
    firma: string,
    sello: string
  }
}