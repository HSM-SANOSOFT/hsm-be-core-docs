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
        ]
}


    

}