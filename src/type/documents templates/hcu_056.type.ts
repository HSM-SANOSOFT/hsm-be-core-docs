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
      enegia_electrica: {
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
  }
}