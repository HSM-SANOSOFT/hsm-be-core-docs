export type Hcu007DocumentTemplate = {
    //DATOS DEL ESTABLECIMIENTO Y USUARIO/PACIENTE
    A_sol: {
      institucion_sistema: string;
        unicodigo: number;
        establecimiento_salud: string;
        numero_historia_clinica: string;
        numero_archivo: number;
        primer_apellido: string;
        segundo_apellido: string;
        primer_nombre: string;
        segundo_nombre: string;
        sexo: string;
        fecha_nacimiento: string;
        edad: string;
        condicion_edad: {
            h: boolean;
            d: boolean;
            m: boolean;
            a: boolean;
        };
    },

    B_sol: {
        caracteristicas_atencion: {
            "servicio": {
                emergencia: boolean;
                consulta_externa: boolean;
                hospitalizacion: boolean;
            },

            especialidad: string;
            num_cama: string;
            num_sala: string;

            urgente:{
                si: boolean;
                no: boolean;
            },

            especialidad_consultada: string;
            descripcion_motivo: string;
    },

    C_sol: {
       cuadro_clinico: string;
    },

    D_sol: {
        resultado_examenes: string;
    }  
},

     E_sol: {
      diagnosticos: {
        id: number;
        descripcion: string;
        cie: string;
        pre: boolean;
        def: boolean;
      }[];
    };

    F_sol: {
        plan_realizado: string;
    },

    G_sol: {
        fecha:"",
        hora: "",
        nombre_med: string;
        primer_apellido_med: string;
        segundo_apellido_med: string;
        numero_identificacion_med: string;
        firma_med: string;
        sello_med: string;
    },

    //INTERCONSSULTA - INFORME
    A_inf: {
        institucion_sistema: string;
            unicodigo: number;
            establecimiento_salud: string;
            numero_historia_clinica: string;
            numero_archivo: number;
            primer_apellido: string;
            segundo_apellido: string;
            primer_nombre: string;
            segundo_nombre: string;
            sexo: string;
            fecha_nacimiento: string;
            edad: string;
            condicion_edad: {
                h: boolean;
                d: boolean;
                m: boolean;
                a: boolean;
            };
    },

    B_inf: {
        cuadro_clinico_inter: string;
    },

    C_inf: {
        resumen_criterio_clinico: string;
    },

     D_inf: {
      diagnosticos: {
        id: number;
        descripcion: string;
        cie: string;
        pre: boolean;
        def: boolean;
      }[];
    };

    E_inf: {
        plan_diagnostico: string;
    },

    F_inf: {
       plan_terapeutico: string;
    },

    G_inf: {
        fecha:"",
        hora: "",
        nombre_med: string;
        primer_apellido_med: string;
        segundo_apellido_med: string;
        numero_identificacion_med: string;
        firma_med: string;
        sello_med: string;
    },
}