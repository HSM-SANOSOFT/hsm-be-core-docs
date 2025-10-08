export type Hcu117DocumentTemplate = {
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
    edad: string;
    condicion_edad: {
      h: boolean;
      d: boolean;
      m: boolean;
      a: boolean;
    }
  },

  B: {
    discapacidad: boolean,
    condicion_discapacitante: boolean
  },

  C: {
    cuadro_clinico: string
  },

  D: {
    diagnostico: {
      descripcion: string,
      cie: string
    }[];
  },

  E: {
    tratamiento: {
      farmacologico: {
        fecha_inicio: string,
        descripcion_tratamiento: string
      },

      rehabilitacion: {
        fecha_inicio: string,
        descripcion_tratamiento: string
      },

      quirurgico: {
        fecha_inicio: string,
        descripcion_tratamiento: string
      }
    }
  },

  F: {
    permanentes_irreversibles: boolean,
    temporales_reversibles: boolean,

    secuelas: {
      tipo: string,
      descripcion: string
    }[];
  },

  G: {
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