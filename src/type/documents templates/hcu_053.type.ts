export type Hcu053DocumentTemplate = {
    //DATOS DEL ESTABLECIMIENTO Y USUARIO/PACIENTE
    A_ref: {  
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
      fecha_nacimiento: string;
      edad: string;

      condicion_edad: {
        m1: boolean;
        d: boolean;
        m2: boolean;
        a: boolean;
      };

      telefono: string;

      referencia: string;
      derivacion: string;

      motivos: {
        numero: number;
        descripcion: string;
        seleccionado: boolean;
      }[]; 


      residencia: {
        provincia: number;
        canton: number;
        parroquia: number;
      };
    };

    //DATOS DEL ESTABLECIMIENTO AL QUE SE REFIERE - DERIVA
    B_ref: {
      institucion_sistema: string;
      establecimiento_salud: string;
      servicio: string;
      especialidad: string;
    };

    //RESUMEN DEL CUADRO CLINICO
    C_ref: {
      resumen_clinico: string;
    };

    //HALLAZGOS RELEVANTES DE EXÁMENES Y PROCEDIMIENTOS DIAGNÓSTICOS
    D_ref: {
      hallazgos: string;
    };

    //DIAGNÓSTICO
    E_ref: {
      diagnosticos: {
        id: number;
        descripcion: string;
        cie: string;
        pre: boolean;
        def: boolean;
      }[];
    };

    //DATOS DEL PROFESIONAL RESPONSABLE
    F_ref: {
      fecha: string;
      hora: string;
      primer_nombre_med: string;
      primer_apellido_med: string;
      segundo_apellido_med: string;
      documento_identificacion_med: string;
      firma_med: string; 
      sello_med: string; 
    };

    //EVALUACIÓN DE LA REFERENCIA - DERIVACIÓN
    G_ref: {
      referencia_justificada: {
        si: boolean;
        no: boolean;
      };
      derivacion_justificada: {
        si: boolean;
        no: boolean;
      };
    };
  
  
    tipo: {
      contrarreferencia: boolean;
      referencia_inversa: boolean;
    };

    //DATOS DEL ESTABLECIMIENTO QUE CONTRAREFIERE O REALIZA LA REFERENCIA INVERSA
    A_contref: {
      institucion_sistema: string;
      unicodigo: string;
      establecimiento_salud: string;
      tipologia: string;
      numero_historia_clinica: string;
      numero_archivo: string;
    };

    //DATOS DEL ESTABLECIMIENTO AL CUAL SE CONTRAFIERE O SE REALIZA REFERENCIA INVERSA
    B_contref: {
      institucion_sistema: string;
      establecimiento_salud: string;
      distrito: string;
      fecha: string;
    };

    //RESUMEN DEL CUADRO CLINICO
    C_contref: {
      resumen_clinico: string;
    };

    //HALLAZGOS RELEVANTESS DE EXÁMENES Y PROCEDIMIENTOS DIÁGNOSTICOS
    D_contref: {
      hallazgos: string;
    };

    //TRATAMIENTOS Y PROCEDIMIENTOS TERAPÉUTICOS REALIZADOS
    E_contref: {
      tratamientos: string; 
    };

    //DIAGNÓSTICO
    F_contref: {
      diagnosticos: {
        id: string;
        descripcion: string;
        cie: string;
        pre: string;
        def: string;
      }[];
    };

    //TRATAMIENTO RECOMENDADO A SEGUIR EN ESTABLECIMIENTO DE SALUD AL QUE SE CONTRAREFIERE
    G_contref: {
      tratamiento_recomendado: string;
    };

    //DATOS DEL PROFESIONAL RESPONSABLE
    H_contref: {
      fecha: string;
      hora: string;
      primer_nombre_med: string;
      primer_apellido_med: string;
      segundo_apellido_med: string;
      documento_identificacion_med: string;
      firma_med: string;
      sello_med: string;
    };
  }

