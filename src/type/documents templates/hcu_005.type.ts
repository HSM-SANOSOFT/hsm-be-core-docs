export type Hcu005DocumentTemplate = {
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
    
    //EVOLUCION Y PRESCRIPCIONES
    B: {
      evolucion:{
        fecha: string;
        hora: string;
        nota_evolucion: string;
      },
        prescripciones: {
            farmaco_indicacion: string;
            administracion_farmacos: string;
        };
    },
};
