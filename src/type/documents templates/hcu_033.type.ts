export type Hcu033DocumentTemplate = {
    //DATOS DEL ESTABLECIMIENTO Y USUARIO/PACIENTE
    A: {
      institucion_sistema: string;
      unicodigo: number;
      establecimiento_salud: string;
      numero_historia_clinica: string;
      numero_archivo: string;
      numero_hoja: string;
      primer_apellido: string;
      segundo_apellido: string;
      primer_nombre: string;
      segundo_nombre: string;
      sexo: string;
      edad: string;
      condicion_edad: {
        h: boolean;
        d: boolean;
        m: boolean;
        a: boolean;
      };
    },

    B: {
      embarazada: {
        si: boolean,
        no: boolean
      },

      motivo_consulta: string
    },

    C: {
      enfermedad_actual: string
    },

    D: {
      antibiotico: boolean,
      anestesia: boolean,
      hemorragias: boolean,
      vih_sida: boolean,
      tuberculosis: boolean,
      asma: boolean,
      diabetes: boolean,
      hipertension_arterial: boolean,
      enf_cardiaca: boolean,
      otro: boolean,

      antecedentes_personales: string
    },

    E: {
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

    F: {
      temperatura: string,
      pulso: string,
      frecuencia_respiratoria: string,
      presion_arterial: string
    },

    G: {
      labios: boolean,
      max_superior: boolean,
      lengua: boolean,
      piso_boca: boolean,
      glan_salivales: boolean,
      atm: boolean,
      otros: boolean,
      mejillas: boolean,
      max_inferior: boolean,
      paladar: boolean,
      carrillos: boolean,
      oro_faringe: boolean,
      ganglios: boolean,

      descripcion_examen: string
    },

    H: {
    // Dientes superiores lado izquierdo (18-11)
    upperTeethLeft: [18, 17, 16, 15, 14, 13, 12, 11],
    
    // Dientes superiores lado derecho (21-28) 
    upperTeethRight: [21, 22, 23, 24, 25, 26, 27, 28],
    
    // Dientes inferiores lado izquierdo (48-41)
    lowerTeethLeft: [48, 47, 46, 45, 44, 43, 42, 41],
    
    // Dientes inferiores lado derecho (31-38)
    lowerTeethRight: [31, 32, 33, 34, 35, 36, 37, 38],
    
    // Molares superiores lado izquierdo (55-51)
    upperMolarsLeft: [55, 54, 53, 52, 51],
    
    // Molares superiores lado derecho (61-65)
    upperMolarsRight: [61, 62, 63, 64, 65],
    
    // Molares inferiores lado izquierdo (85-81)
    lowerMolarsLeft: [85, 84, 83, 82, 81],
    
    // Molares inferiores lado derecho (71-75)
    lowerMolarsRight: [71, 72, 73, 74, 75],
  },

  I: {
    higiene_oral: {
      piezas_dentales: {
        p16: boolean,
        p17: boolean,
        p55: boolean,
        placa1: number,
        calculo1: number,
        gingivitis1: number,
        p11: boolean,
        p21: boolean,
        p51: boolean,
        placa2: number,
        calculo2: number,
        gingivitis2: number,
        p26: boolean,
        p27: boolean,
        p65: boolean,
        placa3: number,
        calculo3: number,
        gingivitis3: number,
        p36: boolean,
        p37: boolean,
        p75: boolean,
        placa4: number,
        calculo4: number,
        gingivitis4: number,
        p31: boolean,
        p41: boolean,
        p71: boolean,
        placa5: number,
        calculo5: number,
        gingivitis5: number,
        p46: boolean,
        p47: boolean,
        p85: boolean,
        placa6: number,
        calculo6: number,
        gingivitis6: number,

        total_placa: number,
        total_calculo: number,
        total_gingivitis: number
      },

      periodontal: {
        leve: boolean,
        moderada: boolean,
        severa: boolean
      },

      oclusion: {
        angleI: boolean,
        angleII: boolean,
        angleIII: boolean
      },

      fluorosis: {
        leve: boolean,
        moderada: boolean,
        severa: boolean
      }
    }
  },

  J: {
    D: {
      C: string,
      D: string,
      O: string,

      total_D: string
    },

    d: {
      c: string,
      e: string,
      o: string,

      total_d: string
    }
  },

  L: {
    pedido_examenes: string
  },

  M: {
    biometria: boolean,
    quimica_sanguinea: boolean,
    rayos_x: boolean,
    otros: boolean,
    descripcion_otros: string,

    informe_examen: string
  },

  N: {
    diagnosticos: {
      descripcion: string;
      cie: string;
      pre: boolean;
      def: boolean;
    }[];
  },

  O: {
    fecha: string,
    hora: string,
    primer_nombre_resp: string,
    primer_apellido_resp: string,
    segundo_apellido_resp: string,
    identificacion_resp: string,
    firma_resp: string,
    sello_resp: string
  },

  P: {
    no_sesion: string,
    diagnostico_complicaciones: string,
    procedimiento: string,
    prescripciones: string,
    firma: string,
    fecha: string,
    diagnostico_fecha: string,
    descripcion_procedimiento: string,
    descripcion_prescripcion: string,
    sello: string
  }
}
  
  