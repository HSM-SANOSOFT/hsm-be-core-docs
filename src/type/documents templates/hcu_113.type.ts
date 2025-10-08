export type Hcu113DocumentTemplate = {
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
    edad: string
  },

  B: {
    talla: string,
    peso_real: string,
    imc: string,
    peso_ideal: string,
    superficie_corporal: string
  },

  C: {
    servicio_procedencia: string,
    fecha_ingreso: string,
    fecha_actual: string,
    dias_hospitalizacion: string,
    alergias: string,
    grupo_factor: string,

    diagnostico_uci: {
      descripcion: string,
      cie: string
    }[];

    presion_venosa: string[],
    tension_arterial: string[],
    gasto_cardiaco: string[],
    indice_cardiaco: string[],
    volumen_sistolico: string[],
    resistencia_vascular: string[],
    presion_intra_abdominal: string[],
    pulsioximetria: string[],
    vacio1: string[],
    vacio2: string[],
    vacio3: string[],
    vacio4: string[],
    vacio5: string[],
    vacio6: string[],
    vacio7: string[],
    vacio8: string[],
    vacio9: string[],
    vacio10: string[],
    vacio11: string[],
    vacio12: string[],
    vacio13: string[],
    vacio14: string[],
    vacio15: string[],
    vacio16: string[],
    vacio17: string[],
    vacio18: string[],
    vacio19: string[],
    vacio20: string[],
    vacio21: string[],
    vacio22: string[],
    vacio23: string[],
    vacio24: string[],
    vacio25: string[],
    vacio26: string[],
    vacio27: string[],
    vacio28: string[],
    vacio29: string[],
    vacio30: string[],
    vacio31: string[],
    vacio32: string[],
    vacio33: string[],
    vacio34: string[],
    vacio35: string[],
    vacio36: string[],
    vacio37: string[],
    vacio38: string[],
    vacio39: string[],
    vacio40: string[],

    resultados_laboratorio: {
      leucocitos: string,
      jovenes: string,
      cayados: string,
      segmentados: string,
      eosinofilos: string,
      linfocitos: string,
      tp: string,
      ttp: string,
      plaquetas: string,
      tgo: string,
      tgp: string,
      hematocrito: string,
      glucosa: string,
      urea: string,
      creatinina: string,
      Cl: string,
      Na: string,
      K: string
    },

    total1: string,
    total2: string,
    total3: string,
    total4: string,
    total5: string,
    total6: string,

    medicacion2: {
      m1: string,
      m2: string,
      m3: string,
      m4: string,
      m5: string,
      m6: string,
      m7: string,
      m8: string,
      m9: string,
      m10: string,
      m11: string,
      m12: string,
      m13: string,
      m14: string,
      m15: string,
      m16: string
    },

    descripcion_m2: {
      dm1: string,
      dm2: string,
      dm3: string,
      dm4: string,
      dm5: string,
      dm6: string,
      dm7: string,
      dm8: string,
      dm9: string,
      dm10: string,
      dm11: string,
      dm12: string,
      dm13: string,
      dm14: string,
      dm15: string,
      dm16: string
    },

    celdas_2m1: string[],
    celdas_2m2: string[],
    celdas_2m3: string[],
    celdas_2m4: string[],
    celdas_2m5: string[],
    celdas_2m6: string[],
    celdas_2m7: string[],
    celdas_2m8: string[],
    celdas_2m9: string[],
    celdas_2m10: string[],
    celdas_2m11: string[],
    celdas_2m12: string[],
    celdas_2m13: string[],
    celdas_2m14: string[],
    celdas_2m15: string[],
    celdas_2m16: string[],

    infusion3: {
      i1: string,
      i2: string,
      i3: string,
      i4: string,
      i5: string,
      i6: string,
      i7: string,
      i8: string,
      i9: string,
      i10: string,
      i11: string,
      i12: string,
      i13: string,
      i14: string,
      i15: string,
      i16: string
    },

    descripcion_i2: {
      di1: string,
      di2: string,
      di3: string,
      di4: string,
      di5: string,
      di6: string,
      di7: string,
      di8: string,
      di9: string,
      di10: string,
      di11: string,
      di12: string,
      di13: string,
      di14: string,
      di15: string,
      di16: string
    },

    celdas_3i1: string[],
    celdas_3i2: string[],
    celdas_3i3: string[],
    celdas_3i4: string[],
    celdas_3i5: string[],
    celdas_3i6: string[],
    celdas_3i7: string[],
    celdas_3i8: string[],
    celdas_3i9: string[],
    celdas_3i10: string[],
    celdas_3i11: string[],
    celdas_3i12: string[],
    celdas_3i13: string[],
    celdas_3i14: string[],
    celdas_3i15: string[],
    celdas_3i16: string[],
    celdas_3i17: string[],
    celdas_3i18: string[],

    descripcion_e1: string[],
    descripcion_e2: string[],
    descripcion_e3: string[],
    descripcion_e4: string[],
    descripcion_e5: string[],

    celdas_e1: string[],
    celdas_e2: string[],
    celdas_e3: string[],
    celdas_e4: string[],
    celdas_e5: string[],
    celdas_e6: string[],
    celdas_e7: string[],
    celdas_e8: string[],
    celdas_e9: string[],
    celdas_e10: string[],
    celdas_e11: string[],
    celdas_e12: string[],
    celdas_e13: string[],
    celdas_e14: string[],
    celdas_e15: string[],

    ingresos: {
      total1: string,
      total2: string,
      total3: string,
      total4: string,
      suma: string
    },

    egresos: {
      total5: string,
      total6: string,
      suma: string,
      balance_diario: string,
      balance_total: string
    },

    celdas_esc1: string[],
    celdas_esc2: string[],
    celdas_esc3: string[],
    celdas_esc4: string[],
    celdas_esc5: string[],
    celdas_esc6: string[],
    celdas_esc7: string[],
    celdas_esc8: string[],
    celdas_esc9: string[],

    celdas_gases1: string[],
    celdas_gases2: string[],
    celdas_gases3: string[],
    celdas_gases4: string[],
    celdas_gases5: string[],
    celdas_gases6: string[],
    celdas_gases7: string[],
    celdas_gases8: string[],
    celdas_gases9: string[],
    celdas_gases10: string[],
    celdas_gases11: string[],
    celdas_gases12: string[],
    celdas_gases13: string[],

    personal_enfermeria: {
      am: string,
      pm: string,
      hs: string
    },

    glucosa_celdas: string[]
  },

  D: {}
}