export type Hcu118DocumentTemplate = {
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
        };
    },

    B: {
      diagnostico_principal: string,
      cie: string,

      servicio: {
        emergencia: boolean,
        consulta_externa: boolean,
        hospitalizacion: boolean
      },

      especialidad: string,
      sala: string,
      cama: string,

      diagnostico_transfusion: string,
      cie_transfusion: string,

      categorizacion: {
        clinico: boolean,
        neonatologico: boolean,
        quirurgico: boolean,
        gineco_obst: boolean
      },

      prioridad: {
        emergencia_5min: boolean,
        urgencia_15min: boolean,
        rutina_45min: boolean 
      },

      alistar: boolean,
      fecha: string,
      hora: string,

      tratamiento: string
    },

    C: {
      trans_anter: {
        si: boolean,
        no: boolean,
        no_sabe: boolean
      },

      T_trans_anter: {
        menor_2meses: boolean,
        entre_3a5m: boolean,
        entre_6a8m: boolean,
        entre_9a12m: boolean,
        mayor_12m: boolean
      },

      reac_prev: {
        si: boolean,
        especifique: string,
        no: boolean,
        no_sabe: boolean
      }
    },

    D: {
      hemoglobina: string,
      hemotocrito: string,
      plaquetas: string,
      tp: string,
      ttp: string,
      grupo_abo: string,
      inr: string,
      otros: string
    },

    E: {
      numero: {
        concent_glob: string,
        leucoplaquetaria: string,
        leucorreducidos: string,
        pediatricos: string,
        pedia_leucoplaqueteria: string,
        pedia_leucorreducidos: string,
        irradiados: string,

        concent_plaquetas: string,
        plaquetas_aferesis: string,
        plasma_congelado: string,
        crioprecipitado: string,
        plasma_refrigerado: string,
        sangre_reconstituida: string,
        otro: string
      },

      letras: {
        concent_glob: string,
        leucoplaquetaria: string,
        leucorreducidos: string,
        pediatricos: string,
        pedia_leucoplaqueteria: string,
        pedia_leucorreducidos: string,
        irradiados: string,

        concent_plaquetas: string,
        plaquetas_aferesis: string,
        plasma_congelado: string,
        crioprecipitado: string,
        plasma_refrigerado: string,
        sangre_reconstituida: string,
        otro: string
      }
    },

    F: {
      nombre_persona: string
    },

    F_table: {
      fecha_pedido: string,
      hora_pedido: string,
      nombre_apellido_prof: string,
      firma_sello_personal: string,
      fecha_muestra: string,
      hora_muestra: string,
      nombre_apellido_prof_muestra: string,
      firma_prof_muestra: string
    }
  }