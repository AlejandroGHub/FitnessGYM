// ======================================
// 1. BASE DE DATOS DE GRUPOS MUSCULARES
// ======================================

const GRUPOS_MUSCULARES = {
  // ==================================
  // TREN SUPERIOR
  // ==================================

  SUPERIOR: [
    {
      id: "PECHO",

      nombre: "PECTORALES",

      icono: "◈",

      descripcion: "Grupo muscular ubicado en la parte frontal del tórax.",

      region: "Tren superior",

      funcion:
        "Participa principalmente en la aducción horizontal y flexión del hombro.",

      ubicacion: "Parte anterior del tórax.",

      consejo:
        "Controlá el recorrido del movimiento y evitá utilizar impulso excesivo.",

      ejercicios: [
        {
          nombre: "Press de banca",

          descripcion:
            "Movimiento de empuje horizontal con barra o mancuernas.",
        },

        {
          nombre: "Press inclinado",

          descripcion:
            "Variación del press que enfatiza la porción clavicular del pectoral.",
        },

        {
          nombre: "Aperturas con mancuernas",

          descripcion: "Movimiento de apertura y cierre de los brazos.",
        },

        {
          nombre: "Cruce de poleas",

          descripcion: "Ejercicio de aducción horizontal utilizando poleas.",
        },
      ],
    },

    {
      id: "ESPALDA",

      nombre: "DORSALES Y ESPALDA",

      icono: "▤",

      descripcion:
        "Conjunto de músculos que participan en los movimientos de tracción del tren superior.",

      region: "Tren superior",

      funcion:
        "Participa en la extensión, aducción y estabilización del hombro.",

      ubicacion: "Parte posterior del tronco.",

      consejo:
        "Priorizá el control escapular y evitá compensar los movimientos con la zona lumbar.",

      ejercicios: [
        {
          nombre: "Jalón al pecho",

          descripcion:
            "Movimiento de tracción vertical para trabajar principalmente los dorsales.",
        },

        {
          nombre: "Remo con barra",

          descripcion: "Movimiento de tracción horizontal para espalda.",
        },

        {
          nombre: "Remo en polea",

          descripcion:
            "Ejercicio de tracción horizontal con resistencia constante.",
        },

        {
          nombre: "Dominadas",

          descripcion:
            "Movimiento de tracción vertical utilizando el peso corporal.",
        },
      ],
    },

    {
      id: "HOMBROS",

      nombre: "DELTOIDES",

      icono: "◉",

      descripcion: "Músculos que forman el contorno de los hombros.",

      region: "Tren superior",

      funcion:
        "Participa en diferentes movimientos del hombro, como flexión, abducción y extensión.",

      ubicacion: "Parte superior y lateral del brazo.",

      consejo:
        "Realizá los movimientos de forma controlada y evitá elevar los hombros innecesariamente.",

      ejercicios: [
        {
          nombre: "Press militar",

          descripcion: "Movimiento de empuje vertical.",
        },

        {
          nombre: "Elevaciones laterales",

          descripcion:
            "Ejercicio orientado principalmente a la porción lateral del deltoides.",
        },

        {
          nombre: "Pájaros",

          descripcion:
            "Movimiento que enfatiza la porción posterior del deltoides.",
        },

        {
          nombre: "Elevaciones frontales",

          descripcion: "Movimiento de flexión del hombro.",
        },
      ],
    },

    {
      id: "BICEPS",

      nombre: "BÍCEPS",

      icono: "↗",

      descripcion: "Grupo muscular ubicado en la parte anterior del brazo.",

      region: "Tren superior",

      funcion:
        "Participa principalmente en la flexión del codo y supinación del antebrazo.",

      ubicacion: "Parte frontal del brazo superior.",

      consejo: "Evitá balancear el torso para completar las repeticiones.",

      ejercicios: [
        {
          nombre: "Curl con barra",

          descripcion: "Flexión de codos utilizando una barra.",
        },

        {
          nombre: "Curl con mancuernas",

          descripcion: "Flexión de codos con mancuernas.",
        },

        {
          nombre: "Curl martillo",

          descripcion:
            "Variante con agarre neutro que también involucra el braquial y braquiorradial.",
        },

        {
          nombre: "Curl en polea",

          descripcion: "Flexión de codos utilizando resistencia de polea.",
        },
      ],
    },

    {
      id: "TRICEPS",

      nombre: "TRÍCEPS",

      icono: "↖",

      descripcion: "Grupo muscular ubicado en la parte posterior del brazo.",

      region: "Tren superior",

      funcion: "Su función principal es extender el codo.",

      ubicacion: "Parte posterior del brazo superior.",

      consejo:
        "Mantené el codo controlado y evitá realizar movimientos bruscos.",

      ejercicios: [
        {
          nombre: "Extensión en polea",

          descripcion: "Extensión de codos con polea.",
        },

        {
          nombre: "Press francés",

          descripcion:
            "Ejercicio de extensión de codos con barra o mancuernas.",
        },

        {
          nombre: "Fondos asistidos",

          descripcion:
            "Movimiento de empuje que involucra tríceps y otros músculos del tren superior.",
        },

        {
          nombre: "Extensión sobre la cabeza",

          descripcion:
            "Movimiento que trabaja el tríceps con el brazo elevado.",
        },
      ],
    },
  ],

  // ==================================
  // TREN INFERIOR
  // ==================================

  INFERIOR: [
    {
      id: "CUADRICEPS",

      nombre: "CUÁDRICEPS",

      icono: "▥",

      descripcion: "Grupo muscular ubicado en la parte anterior del muslo.",

      region: "Tren inferior",

      funcion: "Su función principal es extender la rodilla.",

      ubicacion: "Parte frontal del muslo.",

      consejo:
        "Controlá el descenso y mantené una postura estable durante los ejercicios.",

      ejercicios: [
        {
          nombre: "Sentadilla",

          descripcion:
            "Movimiento compuesto que involucra rodillas, caderas y diferentes grupos musculares.",
        },

        {
          nombre: "Prensa",

          descripcion: "Ejercicio de empuje de piernas en máquina.",
        },

        {
          nombre: "Extensión de cuádriceps",

          descripcion: "Ejercicio de extensión de rodillas.",
        },

        {
          nombre: "Sentadilla goblet",

          descripcion:
            "Variación de sentadilla utilizando una mancuerna o pesa rusa.",
        },
      ],
    },

    {
      id: "ISQUIOTIBIALES",

      nombre: "ISQUIOTIBIALES",

      icono: "▤",

      descripcion: "Grupo muscular ubicado en la región posterior del muslo.",

      region: "Tren inferior",

      funcion: "Participa en la flexión de rodilla y extensión de cadera.",

      ubicacion: "Parte posterior del muslo.",

      consejo:
        "Evitá perder la posición de la espalda durante los movimientos de bisagra de cadera.",

      ejercicios: [
        {
          nombre: "Peso muerto rumano",

          descripcion:
            "Movimiento de bisagra de cadera que trabaja la cadena posterior.",
        },

        {
          nombre: "Curl femoral",

          descripcion: "Ejercicio de flexión de rodillas.",
        },

        {
          nombre: "Buenos días",

          descripcion: "Movimiento de bisagra de cadera con carga controlada.",
        },

        {
          nombre: "Peso muerto",

          descripcion:
            "Ejercicio compuesto que involucra diferentes músculos de la cadena posterior.",
        },
      ],
    },

    {
      id: "GLUTEOS",

      nombre: "GLÚTEOS",

      icono: "◉",

      descripcion: "Grupo muscular formado por glúteo mayor, medio y menor.",

      region: "Tren inferior",

      funcion:
        "Participa en la extensión, abducción y estabilización de la cadera.",

      ubicacion: "Región posterior y lateral de la pelvis.",

      consejo:
        "Mantené el control de la pelvis y evitá compensaciones excesivas de la zona lumbar.",

      ejercicios: [
        {
          nombre: "Hip thrust",

          descripcion: "Movimiento de extensión de cadera.",
        },

        {
          nombre: "Sentadilla",

          descripcion:
            "Ejercicio compuesto que involucra glúteos y cuádriceps.",
        },

        {
          nombre: "Patada de glúteos",

          descripcion: "Movimiento de extensión de cadera.",
        },

        {
          nombre: "Abducción de cadera",

          descripcion:
            "Movimiento que involucra principalmente el glúteo medio y menor.",
        },
      ],
    },

    {
      id: "GEMELOS",

      nombre: "GEMELOS Y SÓLEO",

      icono: "▥",

      descripcion: "Músculos principales de la región posterior de la pierna.",

      region: "Tren inferior",

      funcion: "Participan principalmente en la flexión plantar del tobillo.",

      ubicacion: "Parte posterior de la pierna, debajo de la rodilla.",

      consejo:
        "Realizá el recorrido completo de forma controlada, sin rebotes.",

      ejercicios: [
        {
          nombre: "Elevación de talones de pie",

          descripcion: "Ejercicio de flexión plantar con rodillas extendidas.",
        },

        {
          nombre: "Elevación de talones sentado",

          descripcion: "Variante que enfatiza el trabajo del sóleo.",
        },

        {
          nombre: "Gemelos en prensa",

          descripcion: "Flexión plantar utilizando la máquina de prensa.",
        },
      ],
    },
  ],

  // ==================================
  // ZONA MEDIA / CORE
  // ==================================

  CORE: [
    {
      id: "ABDOMINALES",

      nombre: "RECTO ABDOMINAL",

      icono: "▦",

      descripcion: "Músculo anterior de la pared abdominal.",

      region: "Zona media",

      funcion: "Participa en la flexión del tronco y estabilización abdominal.",

      ubicacion: "Parte frontal del abdomen.",

      consejo: "Evitá tirar del cuello durante los ejercicios abdominales.",

      ejercicios: [
        {
          nombre: "Crunch abdominal",

          descripcion: "Flexión controlada del tronco.",
        },

        {
          nombre: "Crunch en polea",

          descripcion: "Flexión del tronco utilizando resistencia.",
        },

        {
          nombre: "Elevación de piernas",

          descripcion:
            "Ejercicio que involucra la musculatura abdominal y flexores de cadera.",
        },

        {
          nombre: "Abdominales en banco",

          descripcion: "Variación de flexión del tronco.",
        },
      ],
    },

    {
      id: "OBLICUOS",

      nombre: "OBLICUOS",

      icono: "◇",

      descripcion: "Músculos laterales de la pared abdominal.",

      region: "Zona media",

      funcion:
        "Participan en la rotación, inclinación lateral y estabilización del tronco.",

      ubicacion: "Laterales del abdomen.",

      consejo:
        "Realizá las rotaciones con control y evitá movimientos bruscos.",

      ejercicios: [
        {
          nombre: "Plancha lateral",

          descripcion: "Ejercicio isométrico de estabilización lateral.",
        },

        {
          nombre: "Woodchopper en polea",

          descripcion: "Movimiento diagonal con resistencia.",
        },

        {
          nombre: "Pallof press",

          descripcion: "Ejercicio de resistencia a la rotación del tronco.",
        },
      ],
    },

    {
      id: "LUMBARES",

      nombre: "LUMBARES",

      icono: "▤",

      descripcion:
        "Músculos de la región posterior del tronco que contribuyen a la estabilidad de la columna.",

      region: "Zona media",

      funcion:
        "Participan en la extensión y estabilización de la columna vertebral.",

      ubicacion: "Región posterior de la zona lumbar.",

      consejo:
        "Priorizá la estabilidad del tronco y evitá hiperextender la zona lumbar.",

      ejercicios: [
        {
          nombre: "Bird dog",

          descripcion: "Ejercicio de estabilidad del tronco en cuadrupedia.",
        },

        {
          nombre: "Extensiones de espalda",

          descripcion: "Movimiento controlado de extensión del tronco.",
        },

        {
          nombre: "Plancha",

          descripcion: "Ejercicio isométrico de estabilización del tronco.",
        },
      ],
    },

    {
      id: "CORE-ESTABILIDAD",

      nombre: "ESTABILIZADORES",

      icono: "◎",

      descripcion:
        "Conjunto de músculos que colaboran en el control y la estabilidad del tronco.",

      region: "Zona media",

      funcion:
        "Contribuyen a controlar la postura y transmitir fuerzas entre el tren superior e inferior.",

      ubicacion: "Región profunda y superficial del tronco.",

      consejo:
        "Mantené una respiración controlada y una posición estable durante los ejercicios.",

      ejercicios: [
        {
          nombre: "Plancha frontal",

          descripcion: "Ejercicio isométrico de estabilidad.",
        },

        {
          nombre: "Dead bug",

          descripcion:
            "Ejercicio de control del tronco con movimiento alternado de brazos y piernas.",
        },

        {
          nombre: "Pallof press",

          descripcion: "Ejercicio de resistencia a la rotación.",
        },
      ],
    },
  ],
};

// ======================================
// 2. ELEMENTOS DEL HTML
// ======================================

const BOTONES_REGION = document.querySelectorAll(".BOTON-REGION");

const GRILLA = document.getElementById("GRILLA-MUSCULOS");

const TITULO_REGION = document.getElementById("TITULO-REGION");

const CANTIDAD_MUSCULOS = document.getElementById("CANTIDAD-MUSCULOS");

const NOMBRE_MUSCULO = document.getElementById("NOMBRE-MUSCULO");

const DESCRIPCION_MUSCULO = document.getElementById("DESCRIPCION-MUSCULO");

const DATO_REGION = document.getElementById("DATO-REGION");

const DATO_FUNCION = document.getElementById("DATO-FUNCION");

const DATO_UBICACION = document.getElementById("DATO-UBICACION");

const LISTA_EJERCICIOS = document.getElementById("LISTA-EJERCICIOS");

const CONSEJO_MUSCULAR = document.getElementById("CONSEJO-MUSCULAR");

let REGION_ACTUAL = "SUPERIOR";

let MUSCULO_ACTUAL = null;

// ======================================
// 3. MOSTRAR LOS MÚSCULOS
// ======================================

function MOSTRAR_MUSCULOS(REGION) {
  REGION_ACTUAL = REGION;

  const MUSCULOS = GRUPOS_MUSCULARES[REGION];

  GRILLA.innerHTML = "";

  const NOMBRES_REGIONES = {
    SUPERIOR: "TREN SUPERIOR",

    INFERIOR: "TREN INFERIOR",

    CORE: "ZONA MEDIA / CORE",
  };

  TITULO_REGION.textContent = NOMBRES_REGIONES[REGION];

  CANTIDAD_MUSCULOS.textContent = `${MUSCULOS.length} GRUPOS`;

  BOTONES_REGION.forEach((BOTON) => {
    BOTON.classList.toggle("ACTIVO", BOTON.dataset.region === REGION);
  });

  MUSCULOS.forEach((MUSCULO) => {
    const TARJETA = document.createElement("button");

    TARJETA.type = "button";

    TARJETA.className = "TARJETA-MUSCULAR";

    TARJETA.innerHTML = `

            <span class="ICONO-MUSCULAR">
                ${MUSCULO.icono}
            </span>

            <div>

                <span class="ETIQUETA-TARJETA">
                    ${MUSCULO.region.toUpperCase()}
                </span>

                <h3>${MUSCULO.nombre}</h3>

                <p>
                    ${MUSCULO.descripcion}
                </p>

            </div>

        `;

    TARJETA.addEventListener("click", () => {
      MOSTRAR_INFORMACION(MUSCULO);

      document.querySelectorAll(".TARJETA-MUSCULAR").forEach((ELEMENTO) => {
        ELEMENTO.classList.remove("ACTIVO");
      });

      TARJETA.classList.add("ACTIVO");
    });

    GRILLA.appendChild(TARJETA);
  });

  // Seleccionar automáticamente el primer músculo.

  if (MUSCULOS.length > 0) {
    MOSTRAR_INFORMACION(MUSCULOS[0]);

    GRILLA.querySelector(".TARJETA-MUSCULAR").classList.add("ACTIVO");
  }
}

// ======================================
// 4. MOSTRAR INFORMACIÓN DEL MÚSCULO
// ======================================

function MOSTRAR_INFORMACION(MUSCULO) {
  MUSCULO_ACTUAL = MUSCULO;

  NOMBRE_MUSCULO.textContent = MUSCULO.nombre;

  DESCRIPCION_MUSCULO.textContent = MUSCULO.descripcion;

  DATO_REGION.textContent = MUSCULO.region;

  DATO_FUNCION.textContent = MUSCULO.funcion;

  DATO_UBICACION.textContent = MUSCULO.ubicacion;

  CONSEJO_MUSCULAR.textContent = MUSCULO.consejo;

  MOSTRAR_EJERCICIOS(MUSCULO.ejercicios);
}

// ======================================
// 5. MOSTRAR EJERCICIOS
// ======================================

function MOSTRAR_EJERCICIOS(EJERCICIOS) {
  LISTA_EJERCICIOS.innerHTML = "";

  EJERCICIOS.forEach((EJERCICIO, INDICE) => {
    const TARJETA = document.createElement("article");

    TARJETA.className = "EJERCICIO-MUSCULAR";

    const TITULO = document.createElement("h3");

    TITULO.textContent = `${INDICE + 1}. ${EJERCICIO.nombre}`;

    const DESCRIPCION = document.createElement("p");

    DESCRIPCION.textContent = EJERCICIO.descripcion;

    TARJETA.append(TITULO, DESCRIPCION);

    LISTA_EJERCICIOS.appendChild(TARJETA);
  });
}

// ======================================
// 6. CAMBIAR REGIÓN CORPORAL
// ======================================

BOTONES_REGION.forEach((BOTON) => {
  BOTON.addEventListener("click", () => {
    const REGION = BOTON.dataset.region;

    MOSTRAR_MUSCULOS(REGION);
  });
});

// ======================================
// 7. MENÚ RESPONSIVE
// ======================================

const BOTON_MENU = document.getElementById("BOTON-MENU");

const NAVEGACION = document.getElementById("NAVEGACION");

BOTON_MENU.addEventListener("click", () => {
  const ABIERTO = NAVEGACION.classList.toggle("ACTIVO");

  BOTON_MENU.setAttribute("aria-expanded", ABIERTO ? "true" : "false");
});

// ======================================
// 8. INICIALIZAR PÁGINA
// ======================================

MOSTRAR_MUSCULOS("SUPERIOR");
