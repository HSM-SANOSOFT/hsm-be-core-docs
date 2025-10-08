export type Hcu120DocumentTemplate = {
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
    fecha_nacimiento: string;
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
    grupos: {}[];            
    filas: {
      hora: string;          
      mostrar_td4j?: boolean;
      bloques: {
        intervencion?: string;
        marcado: boolean;
        responsable: string;
      }[];
    }[];
    filas2: {
      hora: string;          
      mostrar_td4j?: boolean;
      bloques: {
        intervencion?: string;
        marcado: boolean;
        responsable: string;
      }[];
    }[];
    filas3: {
      hora: string;        
      mostrar_td4j?: boolean;
      bloques: {
        intervencion?: string;
        marcado: boolean;
        responsable: string;
      }[];
    }[];
  }
}
