export type Hcu003DocumentTemplate = {
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
    fecha_nacimiento: string,
    edad: string;
  },

  B: {
    primera: boolean,
    subsecuente: boolean,

    motivo_consulta: string
  },

  C:{
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
    problema_actual: string
  },

  F:{
    fecha: string,
    hora: string,
    temperatura: string,
    presion_arterial: string,
    pulso: string,
    frecuencia_respiratoria: number,
    peso: number,
    talla: number,
    imc: number,
    perimetro_abdominal: number,
    hemoglobina_capilar: number,
    glucosa_capilar: number,
    pulsioximetria: number
  },

  G: {
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
  },

  H: {
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
      neurologico: boolean
    },
    descripcion: string
  },

  I: {
    diagnosticos: {
      descripcion: string;
      cie: string;
      pre: boolean;
      def: boolean;    
    }[];
  },

  J: {
    plan_tratamiento: string
  },

  K: {
    fecha: number,
    hora: number,
    primer_nombre: string,
    primer_apellido: string,
    segundo_apellido: string,
    identificacion: number,
    firma_resp: string,
    sello_resp: string
  }
}
