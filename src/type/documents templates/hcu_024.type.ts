export type Hcu024ADocumentTemplate = {
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
    consentimiento: "",
    servicio: "",

    tipo_servicio: {
      ambulatoria: true,
      hospitalizacion: true
    },

    diagnostico: string,
    cie: string,
    nombre_procedimiento: string,
    consiste: string,
    realiza: string,
    grafico_intervencion: string,
    duracion_intervencion: string,
    beneficios_procedimiento: string,
    riesgos_frecuentes: string,
    riesgos_graves: string,
    riesgos_especificos: string,
    alternativas_procedimiento: string,
    manejo_posterior: string,
    consecuencias_noprocedimiento: string
  },

  C: {
    nombre_completo_paciente: string,
    cedula_paciente: string,
    firma_paciente: string,
    nombre_profesional: string,
    firma_profesional: string,
    nombre_rep_legal: string,
    cedula_rep_legal: string,
    firma_rep_legal: string,
    parentesco: string
  },

  D: {
    nombre_completo_paciente: string,
    cedula_paciente: string,
    firma_paciente: string,
    nombre_profesional: string,
    firma_profesional: string,
    nombre_rep_legal: string,
    cedula_rep_legal: string,
    firma_rep_legal: string,
    parentesco: string,
    nombre_completo_testigo: string,
    cedula_testigo: string,
    firma_testigo: string
  },

  E: {
    nombre_completo_paciente: string,
    cedula_paciente: string,
    firma_paciente: string,
    nombre_profesional: string,
    firma_profesional: string,
    nombre_rep_legal: string,
    cedula_rep_legal: string,
    firma_rep_legal: string,
    parentesco: string
  }
}