export type Hcu001DocumentTemplate = {
    //DATOS DEL ESTABLECIMIENTO Y USUARIO/PACIENTE
    A: {
        institucion_sistema: string;
        unicodigo: number;
        establecimiento_salud: string;
        numero_historia_clinica: string;
        numero_archivo: string;
    },

    B: {
      fecha_admision: string,
      nombre_apellido_admisionista: string
    },

    C: {
      primer_apellido: string,
      segundo_apellido: string,
      primer_nombre: string,
      segundo_nombre: string,
      identificacion: number,
      estado_civil: string,
      sexo: string,
      telefono: string,
      celular: string,
      correo_electronico: string,
      fecha_nacimiento: string,
      lugar_nacimiento: string,
      nacionalidad: string,
      edad: string,
      condicion_edad: {
        h: boolean;
        d: boolean;
        m: boolean;
        a: boolean;
      },
      provincia: string,
      canton: string,
      parroquia: string,
      sector: string,
      calle_principal: string,
      calle_secundaria: string,
      referencia: string,
      autoidentificacion_etnica: string,
      nacionalidad_etnica: string,
      pueblos: string,
      nivel_educacion: string,
      estado_educacion: string,
      ocupacion: string,
      empresa_trabajo: string,
      seguro_salud: string,
      tipo_bono: string
    },

    D: {
      llamar_a: string,
      parentesco: string,
      direccion: string,
      telefono: string
    },

    E: {
      items: {
      n: string;
      fecha_registro: string;
      estado_civil: string;
      nivel_educacion: string;
      empresa: string;
      ocupacion: string;
      seguro: string;
      residencia: {
        provincia: string;
        canton: string;
        parroquia: string;
        barrio: string;
        telefono: string;
        calle_principal: string;
        calle_secundaria: string;
        referencia: string;
      };
    }[];
  },

   F: {
    items: {
      numero_orden: number;
      fecha_admision: string;
      dias_estadia: string;
      codigo_servicio_inec: string;

      dx_principal: {
        descripcion: string;
        cie: string;
        definitivo: boolean;
      };

      dx_secundario: {
        descripcion: string;
        cie: string;
        definitivo: boolean;
      };

      condicion_egreso: {
        alta: boolean;
        muerte_menor_48h: boolean;
        muerte_mayor_48h: boolean;
      };

      tratamiento: {
        clinico: boolean;
        quirurgico: boolean;
        procedimientos_principales: string;
        sello_firma_responsable: string;
      };
    }[];
  }
}

