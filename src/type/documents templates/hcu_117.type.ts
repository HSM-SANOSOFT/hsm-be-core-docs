export type Hcu117DocumentTemplate = {
  //DATOS DEL ESTABLECIMIENTO Y USUARIO/PACIENTE
  A: {
    institucion_sistema: string;
    unicodigo: number;
    establecimiento_salud: string;
    numero_historia_clinica: string;
    numero_archivo: string

  },

  B: {
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
    },

    servicio_atendido: string,
    especialidad: string,

    fecha_atencion: {
      anio: string,
      mes: string,
      dia: string,
      fecha_letras: string
    },

    hora_atencion: {
      desde: string,
      hasta: string
    },

    hospitalizacion: {
      fecha_ingreso: {
        anio: string,
        mes: string,
        dia: string,
        fecha_letras: string
      },

      fecha_alta: {
        anio: string,
        mes: string,
        dia: string,
        fecha_letras: string
      }
    }
  },

  C: {
    reposo: {
      si: boolean,
      no: boolean,
      horas_numeros: number,
      horas_letras: string
    },

    desde: {
      anio: number,
      mes: number,
      dia: number,
      fecha_letras: string
    },

    hasta: {
      anio: number,
      mes: number,
      dia: number,
      fecha_letras: string
    }
  },

  D: {
    diagnostico: {
      descripcion: string,
      cie
    }[];
  },

  E: {
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