export type Hcu019DocumentTemplate = {
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
        especialidad1: string,
        diagnostico: string,
        cx_realizada: string,
        tecnica_anestesica: {
            general: boolean,
            local: boolean,
            troncular: boolean,
            neuroaxial: boolean,
            intravenosa: boolean,
            sedacion: boolean
        }
    },

    C: {
        aldrede_modificado: {
            a7: boolean,
            a8: boolean,
            a9: boolean,
            a10: boolean
        },

        bromage: {
            b100: boolean,
            b66: boolean,
            b33: boolean,
            b0: boolean
        },

        ramsay: {
            r0: boolean,
            r1: boolean,
            r2: boolean,
            r3: boolean,
            r4: boolean,
            r5: boolean,
            r6: boolean
        },

        eva: {
            e0: boolean,
            e1: boolean,
            e2: boolean,
            e3: boolean,
            e4: boolean,
            e5: boolean,
            e6: boolean,
            e7: boolean,
            e8: boolean,
            e9: boolean,
            e10: boolean
        },

        steward: {
            s0: boolean,
            s1: boolean,
            s2: boolean,
            s3: boolean,
            s4: boolean,
            s5: boolean,
            s6: boolean
        },

        otros: string

        fecha: string,
        hora: string,

        entrega: {
            nombre: string,
            firma: string
        },

        recibe: {
            nombre: string,
            firma: string
        }
    },

    D: {
    bloques: {
      filas: {
        celdas: {
          valor: boolean;
          simbolo?: string;
        }[];
      }[];
    }[];

    aldrete: string;
    bromage: string;
    ramsay: string;
    eva: string;
    steward: string;
    otro: string;
  },

  E: {
    oral: string,
    infusiones: string,
    sangre_derivados: string,
    otros: string,
    total: string
  },

  F: {
    diuresis: string,
    vomito: string,
    toracico: string,
    drenajes: string,
    otras: string,
    total: string
  },

  G: {
    fecha: number,
    hora: number,
    evolucion: string,
    prescripcion: string,
    administracion_farmacos: string
  },

  H: {
    const_vitales: {
        ta: string,
        fc: string,
        fr: string,
        sat_O2: string,
        t: string
    },

    escala: {
        aldrete_mod: string,
        bromage: string,
        ramsay: string,
        eva: string,
        steward: string,
        otro: string
    },

    entrega: {
        nombre: string,
        firma: string
    },

    recibe: {
        nombre: string,
        firma: string
    },

    condiciones_salida: {
        extubado: boolean,
        intubado: boolean
    },

    conducido: {
        hospitalizacion: boolean,
        cuidados_intensivos: boolean,
        emergencia: boolean,
        domicilio: boolean,
        morgue: boolean
    }
  },

  I: {
    fecha: number,
    hora: number,
    primer_nombre: string,
    primer_apellido: string,
    segundo_apellido: string,
    numero_identificacion: string,
    firma: string,
    sello: string
  }
}