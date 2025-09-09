export type Hcu010ADocumentTemplate = {
    //DATOS DEL ESTABLECIMIENTO Y USUARIO/PACIENTE
    A_anv: {
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

    B_anv: {
        diagnosticos: {
            descripcion: string;
            cie: string;
        }[];

    servicio: {
        emergencia: boolean,
        consulta_externa: boolean,
        hospitalizacion: boolean
       },

       especialidad: string,
       sala: string,
       cama: string,

       prioridad: {
        urgente: boolean,
        rutina: boolean
       }
    },

    C_anv: {
        hematologia: {
            biometria_hematica: boolean,
            fragilidad_osmotica: boolean,
            hematocrito: boolean,
            metabisulfito: boolean,
            hemoglobina: boolean,
            hematozooario: boolean,
            plaquetas: boolean,
            inv_leishmania: boolean,
            reticulocitos: boolean,
            eosinofilo_nasal: boolean,
            vel_eritrosedimentacion: boolean,
            frotis_sangre_periferica: boolean,
            hierro_serico: boolean,
            acido_folico: boolean,
            fijacion_hierro: boolean,
            vitamina_b12:boolean,
            saturacion_transferrina: boolean,
            transferrina: boolean,
            ferritina: boolean,
            concentrado_globulos: boolean
        },

        inmunologia: {
            complemento_c3: boolean,
            antigeno_hepatitisB: boolean,
            complemento_c4: boolean,
            anticore_igG: boolean,
            igA_total: boolean,
            anticore_igM: boolean,
            igE_total: boolean,
            hepatitisC: boolean,
            igG_total: boolean,
            vih_cuali: boolean,
            igM_total: boolean,
            vih_cuanti: boolean,
            procalcitonina: boolean,
            herpes1_igG: boolean,
            il6: boolean,
            herpes1_igM: boolean,
            ana: boolean,
            herpes2_igG: boolean,
            anca_c: boolean,
            herpes2_igM: boolean,
            anca_p: boolean,
            rubeola_igG: boolean,
            anti_dna: boolean,
            rubeola_igM: boolean,
            anti_ccp: boolean,
            toxoplasma_igG: boolean,
            anti_sm: boolean,
            toxoplasma_igM: boolean,
            anti_ro: boolean,
            citomegalovirus_igG: boolean,
            anti_la: boolean,
            citomegalovirus_igM: boolean,
            cardiolipina_igG: boolean,
            epsteinBar_igG: boolean,
            cardiolipina_igM: boolean,
            epsteinBar_igM: boolean,
            antifosfolipidos_igG: boolean,
            dengue_igG: boolean,
            antifosfolipidos_igM: boolean,
            dengue_igM: boolean,
            factor_reumatoideo: boolean,
            clamidia_igA: boolean,
            sflt1: boolean,
            clamidia_igG: boolean,
            pigf: boolean,
            fta_abs: boolean,
            anticuerpos_igG: boolean,
            hepatitisA_total: boolean,
            hepatitisA: boolean,
            covid: boolean
        },

        vasculares: {
            cpk_total: boolean,
            troponina_I: boolean,
            ck_mb: boolean,
            NTproBNP: boolean,
            cpk_nac: boolean,
            mioglobina: boolean
            troponina_T: boolean,
        },

        hormonas: {
            t3: boolean,
            progesterona: boolean,
            ft3: boolean,
            insulina: boolean,
            t4: boolean,
            acth: boolean,
            ft4: boolean,
            prolactina: boolean,
            tsh: boolean,
            vitaminaD: boolean,
            pth: boolean,
            estradiol: boolean,
            fsh: boolean,
            lh: boolean,
            androstenediona: boolean,
            testosterona_total: boolean,
            factor_crecimientoT1: boolean,
            testosterona_libre: boolean,
            BHCG_cuali: boolean,
            dhea_s: boolean,
            BHCG_cuanti: boolean,
            hormona_crecimiento: boolean
        },

        biologia_genetica: string,

        coagulacion: {
            tiempo_protrombina: boolean,
            tiempo_protrombina_parcial: boolean,
            tiempo_trombina: boolean,
            inr: boolean,
            factor_coagulacion8: boolean,
            factor_coagulacion9: boolean,
            factor_willebrand: boolean,
            fibrinogeno: boolean,
            dimero_d: boolean,
            ident_inhibidores: boolean
        },

        orina: {
            elem_microscopico: boolean,
            gram_gotaFresca: boolean,
            osmolaridad_urinaria: boolean,
            sodio_orinaParcial: boolean,
            potasio_orinaParcial: boolean,
            cloro_orinaParcial: boolean,
            calcio_urinario: boolean,
            fosforo_orinaParcial: boolean,
            magnesio_orinaParcial: boolean,
            glucosa_orinaParcial: boolean,
            urea_orinaParcial: boolean,
            creatina_orinaParcial: boolean,
            nitrogeno_ureicoParcial: boolean,
            acidoUrico_parcial: boolean,
            proteinas_parcial: boolean,
            fosforo_24hrs: boolean,
            potasio_24hrs: boolean,
            proteinas_24hrs: boolean,
            depuracion_creatinina24hrs: boolean,
            acidoUrico_24hrs: boolean,
            calcio_24hrs: boolean,
            amilasa_24hrs: boolean,
            cobre_24hrs: boolean,
            azucares_reductores: boolean,
            drogas_abuso: boolean,
            albinuria: boolean
        },

        inmunosupresores: {
            cyclosporina: boolean,
            everolimus: boolean
            sirolimus: boolean,
            tacrolimus: boolean,
            
        },

        gases_electrolitos: {
            na: boolean,
            mh: boolean,
            k: boolean,
            li: boolean,
            cl: boolean,
            gasometria_arterial: boolean,
            ca1: boolean,
            gasometria_venosa: boolean,
            ca2: boolean,
            calcio_total: boolean,
            p: boolean,
            fosforo: boolean
        },

        transfusional: {
            grupo_factor: boolean,
            coombs_directo: boolean,
            coombs_indirecto: boolean
        },

        quimica_sang: {
            glucosa_basal: boolean,
            bilirrubina_directa: boolean,
            glucosa_2hrs: boolean,
            bilirrubina_indirecta: boolean,
            glucosa_azar: boolean,
            colesterol_total: boolean,
            sobrecarga_glucosa: boolean,
            hdl: boolean,
            sullivan: boolean,
            ldl: boolean,
            urea: boolean,
            vldl: boolean,
            creatinina: boolean,
            trigliceridos: boolean,
            acido_urico: boolean,
            albumina: boolean,
            fosfatasa_alcalina: boolean,
            proteina_totales: boolean,
            ldh: boolean,
            hba1c: boolean,
            ast_tgo: boolean,
            cpk_total: boolean,
            alt_gp: boolean,
            fructosamina: boolean,
            ggt: boolean,
            pcr_cuantitativo: boolean,
            amilasa: boolean,
            amonio: boolean,
            lipasa: boolean,
            bilirrubina_total: boolean
        },

        heces: {
            coproparasitario: boolean,
            criptosporidium: boolean,
            coproparasitario_concentracion: boolean,
            oxiuros: boolean,
            copro_seriado: boolean,
            gardia_antigeno: boolean,
            pmn: boolean,
            inv_grasas: boolean,
            sangre_oculta: boolean,
            azucares_reductores: boolean,
            investigacion_ph: boolean,
            helicobacter_pylori: boolean,
            rotavirus: boolean,
            adenoviris: boolean
        },

        marcadores_tumorales: {
            cea: boolean,
            psa_libre: boolean,
            h4a: boolean,
            afp: boolean,
            psa_total: boolean,
            bhcg_libre: boolean,
            ca_125: boolean,
            microglobulina: boolean,
            bhcg_cuanti: boolean,
            ca_15: boolean,
            anti_tpo: boolean,
            psa_libreT: boolean
            ca_19: boolean,
            anti_tg: boolean,
            ca_72: boolean,
            tiroglobulina: boolean,
        },

        citoquimicos: {
            cefalorraquideo: boolean,
            pleural: boolean,
            sinovial: boolean,
            pericardico: boolean,
            peritoneal: boolean,
            liquido_amniotico: boolean
        },

        farmacos: {
            acido_valproico: boolean,
            carbamazepina: boolean,
            vancomicina: boolean,
            fenobarbital: boolean,
            amikacina: boolean,
            digoxina: boolean,
            litio: boolean,
            fenitopina_sodica: boolean  
        },

        serologia: {
            aglutina: boolean,
            pcr_semicuanti: boolean,
            asto: boolean,
            malaria: boolean,
            fr_latex: boolean,
            sifilis: boolean,
            dengue_pcr: boolean,
            helicobacter_pylori: boolean,
            chlamydia_pcr: boolean,
            pepsinogeno: boolean,
            vdrl: boolean
        },

        microbiologia: {
            muestra: string,
            sitio_anatomico: string,
            antibiograma: string,
            cristalografia: boolean,
            gram: string,
            fresco: string,
            micologico: string,
            micotico: string
        }
    },

    D_anv: {
        fecha_generacion: number,
        hora_generacion: number,
        nombres_med: string,
        primer_apellido_med: string,
        segundo_apellido_med: string,
        identificacion_med: string,
        firma_med: string,
        sello_med: string,
        fecha_toma_muestra: number,
        hora_toma_muestra: number,
        nombre_apellido_personaTmuestra: string,
        firma_personaTmuestra: string
    },

    A_rev: {
        prueba_rapida: boolean,
        elisa_automatizada: boolean,
        clia: boolean,
        ifi: boolean,
        carga_viral: boolean,
        cd4: boolean,
        tamizaje_sifilis: boolean,
        vdrl: boolean,
        hepatitisB: boolean
    },

    B_rev: {
        afectado: {
            nuevo: boolean,
            recaida: boolean,
            fracaso: boolean,
            perdida_seguimiento: boolean,
            ppv: boolean,
            ppl: boolean,
            niño_menor5: boolean,
            sospecha_meningitis: boolean,
            sospecha_clinica: boolean,
            comorbilidad: boolean,
            comorbilidad_descrip: string,
            contacto_tbr: boolean,
            sospecha_tb: boolean,
            th_salud: boolean,
            irregularidad_tto: boolean,
            reversion: boolean,
            embarazo: boolean,
            bk_2: boolean,
            condicion_especial: boolean,
            condicion_especialDescrip: boolean,
            otros: boolean,
            otros_descrip: string
        },

        ant_tuberculosis: {
            tb_sensible: boolean,
            tb_resistente: boolean,
            tipo_resistencia: string
        },

        tipo_muestra: {
            esputo: boolean,
            otros: boolean,
            otros_descripcion: string
        },

        soli_diagnostico: {
            ada: boolean

            baciloscopia: {
                diagnostico: boolean,
                no: boolean,
                control: boolean,
                no_mes: boolean
            },

            cultivo_solido: {
                diagnostico: boolean,
                no: boolean,
                control: boolean,
                no_mes: boolean
            },

            pcr_real: boolean,
            nitrato_reductasa: boolean,
            cultivo_mliquido: boolean,
            genotipificacion: boolean,
            tripificacion: boolean,
            psd_1S: boolean,
            psd_1L: boolean,
            psd_2S: boolean,
            psd_2L: boolean
        }
    }
}