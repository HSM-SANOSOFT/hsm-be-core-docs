export type Hcu006DocumentTemplate = {
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
    }

     "B": {
        "resumen_clinico": "string"
    },

     "C": {
        "resumen_evolucion_complicaciones": "string"
    },

    "D": {
        "hallazgos_relevantes": ""
    },

    "E": {
        "resumen_tratamiento": "string"
    },

    "F": {
        "indicacion_alta": "string"
    },
    
    "G": {
        diagnosticosEgreso: [
            {
            tipo: 'DIAGNÓSTICO PRINCIPAL',
            diagnostico: '',
            cie: ''
            },
            {
            tipo: 'DIAGNÓSTICO SECUNDARIO',
            diagnostico: '',
            cie: ''
            },
            {
            tipo: 'DIAGNÓSTICO SECUNDARIO',
            diagnostico: '',
            cie: ''
            },
            {
            tipo: 'DIAGNÓSTICO SECUNDARIO',
            diagnostico: '',
            cie: ''
            },
            {
            tipo: 'DIAGNÓSTICO SECUNDARIO',
            diagnostico: '',
            cie: ''
            },
            {
            tipo: 'DIAGNÓSTICO SECUNDARIO',
            diagnostico: '',
            cie: ''
            },
            {
            tipo: 'CAUSA EXTERNA',
            diagnostico: '',
            cie: ''
            }
        ];

        "H": {
            condicionEgreso: {
                "vivo": '',
                "fallecido": '',

                "alta_medica": '',
                "alta_voluntaria": '',
                "asintomatico": '',
                "retiro_no_autorizado": '',
                "discapacidad": '',
                "defuncion_menos_horas": '',
                "defuncion_mas_horas": '',

                "dias_estadia": '',
                "dias_reposo": ''
            }
        };
    
        "I": {
           medico_tratante: [
            {
                id: '';
                nombre: '';
                especialidad: '';
                sello_cedula: '';
                periodo_responsabilidad: '';
            },
        ];
    }

    "J": {
        "profesional_responsable": {
            fecha: string;
            hora: string;
            nombres: string;
            primer_apellido: string;
            segundo_apellido: string;
            numero_cedula: string;
            firma: string;
            sello_cedula: string;
            elaborado_por: string;
            revisado_por: string;
        }
    },
}
}