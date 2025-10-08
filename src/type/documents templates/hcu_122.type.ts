export type Hcu122DocumentTemplate = {
    //DATOS DEL ESTABLECIMIENTO Y USUARIO/PACIENTE
    A_reg: {
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

    B_reg: {
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

      reacciones: {
        si: boolean,
        no: boolean,
        cuales: string
      },

      tratamiento: string
    },

    C_reg: {
      comp_sang: {
        inspeccion1: string,
        t1: string,
        tipo_comp1: string,
        grupo_abo1: string,
        codigo1: string,
        volumen1: string,
        fecha_caducidad1: string,

        inspeccion2: string,
        t2: string,
        tipo_comp2: string,
        grupo_abo2: string,
        codigo2: string,
        volumen2: string,
        fecha_caducidad2: string,

        inspeccion3: string,
        t3: string,
        tipo_comp3: string,
        grupo_abo3: string,
        codigo3: string,
        volumen3: string,
        fecha_caducidad3: string,

        inspeccion4: string,
        t4: string,
        tipo_comp4: string,
        grupo_abo4: string,
        codigo4: string,
        volumen4: string,
        fecha_caducidad4: string,

        inspeccion5: string,
        t5: string,
        tipo_comp5: string,
        grupo_abo5: string,
        codigo5: string,
        volumen5: string,
        fecha_caducidad5: string,

        inspeccion6: string,
        t6: string,
        tipo_comp6: string,
        grupo_abo6: string,
        codigo6: string,
        volumen6: string,
        fecha_caducidad6: string,

        inspeccion7: string,
        t7: string,
        tipo_comp7: string,
        grupo_abo7: string,
        codigo7: string,
        volumen7: string,
        fecha_caducidad7: string,

        inspeccion8: string,
        t8: string,
        tipo_comp8: string,
        grupo_abo8: string,
        codigo8: string,
        volumen8: string,
        fecha_caducidad8: string,

        inspeccion9: string,
        t9: string,
        tipo_comp9: string,
        grupo_abo9: string,
        codigo9: string,
        volumen9: string,
        fecha_caducidad9: string,

        inspeccion10: string,
        t10: string,
        tipo_comp10: string,
        grupo_abo10: string,
        codigo10: string,
        volumen10: string,
        fecha_caducidad10: string,

        inspeccion11: string,
        t11: string,
        tipo_comp11: string,
        grupo_abo11: string,
        codigo11: string,
        volumen11: string,
        fecha_caducidad11: string
      },

      transf_paciente: {
        grupo_abo: string,
        subgrupo_abo: string,
        fenotipo: string,
        coombs_directo: string,
        pruebas_cruzadas: string,
        inv_anticuerpo: string,
        ident_anticuerpo: string,

        observaciones: string,
        descripcion_observaciones: string
      }
    },

    env: {
      enviado_por: string,
      fecha_enviado: string,
      hora_enviado: string,
      firma_enviado: string,

      transportado_por: string,
      fecha_transportado: string,
      hora_transportado: string,
      firma_transportado: string,

      recibido_por: string,
      fecha_recibido: string,
      hora_recibido: string,
      firma_recibido: string
    },

    A_seg: {
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

    B_seg: {
      filas: {
        hora_transfusion: string;
        codigo_componente: string;
        via_administracion: string;
        n_cateter: string;

        temp_antes: string;
        temp_durante: string;
        temp_despues: string;

        ta_antes: string;
        ta_durante: string;
        ta_despues: string;

        fc_antes: string;
        fc_durante: string;
        fc_despues: string;

        fr_antes: string;
        fr_durante: string;
        fr_despues: string;

        hora_finalizada: string;
        tiempo_total: string;
        volumen_administrado: string;

        reaccion_si: boolean;
        reaccion_no: boolean;
        reaccion_cual: string;
      }[];
    },

    C_seg: {
      durante: boolean,
      postransfusion: boolean,
      hora_inicio: string,

      sintomas: {
        anafilaxia: boolean,
        coagulacion_intravascular: boolean,
        fiebre: boolean,
        hipertension: boolean,
        nausea: boolean,
        taquicardia: boolean,
        cianosis: boolean,
        dolor_lumbar: boolean,
        hemoglobinuria: boolean,
        hipotension: boolean,
        shock: boolean,
        urticaria: boolean,
        disnea: boolean,
        edema_pulmonar: boolean,
        hemorragia: boolean,
        ictericia: boolean,
        seroconversion: boolean,
        vomito: boolean,
        otro: boolean,
        otro_especificar: string
      },

      reaccion_adversa: {
        inmediata: boolean,
        tardia: boolean,

        no_hemolitica: boolean,
        anafilatica: boolean,
        hemolitica_tardia: boolean,
        infeccion_bacteriana: boolean,
        hemolitica_aguda: boolean,
        alergica: boolean,
        purpura_transfusional: boolean,
        infeccion_viral: boolean,
        hemolisis_noInmune: boolean,
        sobrecarga_circulatoria: boolean,
        eich: boolean,
        infeccion_parasitaria: boolean,
        trali: boolean,
        sepsis: boolean,
        inmunomodulacion: boolean,
        sobrecarga_hierro: boolean,
        otro: boolean,
        otro_especificar: string
      }
    },

    D_seg: {
      responsable_smt: {
        nombre_apellido: string,
        firma: string,
        sello_codigo: string
      },

      resp_Inicio_trans: {
        nombre_apellido: string,
        firma: string,
        sello_codigo: string
      },

      resp_Fin_trans: {
        nombre_apellido: string,
        firma: string,
        sello_codigo: string
      }
    }
  }