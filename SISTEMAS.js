// ======================================
// 1. DATOS DE LOS SISTEMAS
// ======================================

const SISTEMAS = {
  // ----------------------------------
  // UPPER / LOWER
  // ----------------------------------

  "UPPER-LOWER": {
    nombre: "UPPER / LOWER",

    descripcion:
      "Alterna sesiones de tren superior e inferior durante la semana.",

    sesiones: [
      {
        nombre: "TREN SUPERIOR A",

        descripcion: "Trabajo general de pecho, espalda, hombros y brazos.",

        ejercicios: [
          ["Press de banca", "3 x 8-10", "Pecho y tríceps"],
          ["Remo con barra", "3 x 8-12", "Espalda y bíceps"],
          ["Press militar", "3 x 8-10", "Hombros y tríceps"],
          ["Jalón al pecho", "3 x 10-12", "Dorsales"],
          ["Curl de bíceps", "2 x 10-12", "Bíceps"],
        ],
      },

      {
        nombre: "TREN INFERIOR A",

        descripcion: "Trabajo general del tren inferior.",

        ejercicios: [
          ["Sentadilla", "3 x 8-10", "Cuádriceps y glúteos"],
          ["Peso muerto rumano", "3 x 8-10", "Isquiotibiales"],
          ["Prensa", "3 x 10-12", "Cuádriceps"],
          ["Curl femoral", "2 x 10-12", "Isquiotibiales"],
          ["Gemelos", "3 x 12-15", "Gemelos"],
        ],
      },

      {
        nombre: "TREN SUPERIOR B",

        descripcion: "Segunda sesión de tren superior con ejercicios variados.",

        ejercicios: [
          ["Press inclinado", "3 x 8-12", "Pecho superior"],
          ["Remo en polea", "3 x 10-12", "Espalda"],
          ["Elevaciones laterales", "3 x 12-15", "Deltoides lateral"],
          ["Aperturas en polea", "2 x 12-15", "Pecho"],
          ["Curl martillo", "2 x 10-12", "Bíceps"],
        ],
      },

      {
        nombre: "TREN INFERIOR B",

        descripcion: "Segunda sesión de piernas.",

        ejercicios: [
          ["Prensa", "3 x 10-12", "Cuádriceps"],
          ["Hip thrust", "3 x 8-12", "Glúteos"],
          ["Extensión de cuádriceps", "2 x 12-15", "Cuádriceps"],
          ["Curl femoral", "3 x 10-12", "Isquiotibiales"],
          ["Gemelos", "3 x 12-15", "Gemelos"],
        ],
      },
    ],
  },

  // ----------------------------------
  // WEIDER
  // ----------------------------------

  WEIDER: {
    nombre: "WEIDER",

    descripcion:
      "Organiza el trabajo por grupos musculares en sesiones diferenciadas.",

    sesiones: [
      {
        nombre: "PECHO Y TRÍCEPS",

        descripcion: "Movimientos de empuje para el torso.",

        ejercicios: [
          ["Press de banca", "3 x 8-10", "Pecho"],
          ["Press inclinado", "3 x 10-12", "Pecho superior"],
          ["Aperturas", "2 x 12-15", "Pecho"],
          ["Fondos asistidos", "2 x 8-12", "Pecho y tríceps"],
          ["Extensión de tríceps", "3 x 10-12", "Tríceps"],
        ],
      },

      {
        nombre: "ESPALDA Y BÍCEPS",

        descripcion: "Ejercicios de tracción para espalda y brazos.",

        ejercicios: [
          ["Jalón al pecho", "3 x 8-12", "Dorsales"],
          ["Remo con barra", "3 x 8-10", "Espalda media"],
          ["Remo en polea", "2 x 10-12", "Espalda"],
          ["Face pull", "2 x 12-15", "Deltoides posterior"],
          ["Curl con barra", "3 x 10-12", "Bíceps"],
        ],
      },

      {
        nombre: "PIERNAS",

        descripcion: "Trabajo general de cuádriceps, isquiotibiales y glúteos.",

        ejercicios: [
          ["Sentadilla", "3 x 8-10", "Cuádriceps y glúteos"],
          ["Peso muerto rumano", "3 x 8-10", "Isquiotibiales"],
          ["Prensa", "3 x 10-12", "Cuádriceps"],
          ["Curl femoral", "2 x 10-12", "Isquiotibiales"],
          ["Gemelos", "3 x 12-15", "Gemelos"],
        ],
      },

      {
        nombre: "HOMBROS Y ABDOMEN",

        descripcion: "Trabajo de hombros y zona media.",

        ejercicios: [
          ["Press militar", "3 x 8-10", "Deltoides"],
          ["Elevaciones laterales", "3 x 12-15", "Deltoides lateral"],
          ["Pájaros", "2 x 12-15", "Deltoides posterior"],
          ["Plancha", "3 x 20-40 s", "Zona media"],
          ["Crunch abdominal", "3 x 12-15", "Abdominales"],
        ],
      },

      {
        nombre: "BRAZOS",

        descripcion: "Trabajo complementario de bíceps y tríceps.",

        ejercicios: [
          ["Curl con barra", "3 x 8-12", "Bíceps"],
          ["Curl martillo", "2 x 10-12", "Braquial"],
          ["Press cerrado", "3 x 8-10", "Tríceps"],
          ["Extensión en polea", "2 x 12-15", "Tríceps"],
        ],
      },
    ],
  },

  // ----------------------------------
  // PUSH / PULL
  // ----------------------------------

  "PUSH-PULL": {
    nombre: "PUSH / PULL",

    descripcion: "Separa los movimientos de empuje (push) y tracción (pull).",

    sesiones: [
      {
        nombre: "PUSH A",

        descripcion: "Entrenamiento de pecho, hombros y tríceps.",

        ejercicios: [
          ["Press de banca", "3 x 8-10", "Pecho"],
          ["Press militar", "3 x 8-10", "Hombros"],
          ["Press inclinado", "2 x 10-12", "Pecho superior"],
          ["Elevaciones laterales", "3 x 12-15", "Deltoides"],
          ["Extensión de tríceps", "3 x 10-12", "Tríceps"],
        ],
      },

      {
        nombre: "PULL A",

        descripcion: "Entrenamiento de espalda, deltoides posterior y bíceps.",

        ejercicios: [
          ["Jalón al pecho", "3 x 8-12", "Dorsales"],
          ["Remo con barra", "3 x 8-10", "Espalda media"],
          ["Remo en polea", "2 x 10-12", "Espalda"],
          ["Face pull", "2 x 12-15", "Deltoides posterior"],
          ["Curl con barra", "3 x 10-12", "Bíceps"],
        ],
      },

      {
        nombre: "PUSH B",

        descripcion: "Segunda sesión de empuje con variantes.",

        ejercicios: [
          ["Press inclinado", "3 x 8-12", "Pecho superior"],
          ["Press de hombros", "3 x 10-12", "Hombros"],
          ["Aperturas en polea", "2 x 12-15", "Pecho"],
          ["Elevaciones laterales", "2 x 12-15", "Deltoides"],
          ["Extensión de tríceps", "3 x 10-12", "Tríceps"],
        ],
      },

      {
        nombre: "PULL B",

        descripcion: "Segunda sesión de tracción.",

        ejercicios: [
          ["Dominadas asistidas", "3 x 6-10", "Dorsales"],
          ["Remo con mancuerna", "3 x 10-12", "Espalda"],
          ["Pullover en polea", "2 x 12-15", "Dorsales"],
          ["Pájaros", "2 x 12-15", "Deltoides posterior"],
          ["Curl martillo", "3 x 10-12", "Bíceps"],
        ],
      },
    ],
  },

  // ----------------------------------
  // PUSH / PULL / LEGS
  // ----------------------------------

  PPL: {
    nombre: "PUSH / PULL / LEGS",

    descripcion: "Divide el entrenamiento en empuje, tracción y piernas.",

    sesiones: [
      {
        nombre: "PUSH",

        descripcion: "Trabajo de pecho, hombros y tríceps.",

        ejercicios: [
          ["Press de banca", "3 x 8-10", "Pecho"],
          ["Press militar", "3 x 8-10", "Hombros"],
          ["Press inclinado", "2 x 10-12", "Pecho superior"],
          ["Elevaciones laterales", "3 x 12-15", "Deltoides"],
          ["Extensión de tríceps", "3 x 10-12", "Tríceps"],
        ],
      },

      {
        nombre: "PULL",

        descripcion: "Trabajo de espalda y bíceps.",

        ejercicios: [
          ["Jalón al pecho", "3 x 8-12", "Dorsales"],
          ["Remo con barra", "3 x 8-10", "Espalda media"],
          ["Remo en polea", "2 x 10-12", "Espalda"],
          ["Face pull", "2 x 12-15", "Deltoides posterior"],
          ["Curl con barra", "3 x 10-12", "Bíceps"],
        ],
      },

      {
        nombre: "LEGS",

        descripcion:
          "Trabajo de cuádriceps, isquiotibiales, glúteos y gemelos.",

        ejercicios: [
          ["Sentadilla", "3 x 8-10", "Cuádriceps y glúteos"],
          ["Peso muerto rumano", "3 x 8-10", "Isquiotibiales"],
          ["Prensa", "3 x 10-12", "Cuádriceps"],
          ["Curl femoral", "2 x 10-12", "Isquiotibiales"],
          ["Gemelos", "3 x 12-15", "Gemelos"],
        ],
      },

      {
        nombre: "PUSH 2",

        descripcion: "Segunda sesión de empuje.",

        ejercicios: [
          ["Press inclinado", "3 x 8-12", "Pecho"],
          ["Press hombros con mancuernas", "3 x 10-12", "Hombros"],
          ["Cruce en polea", "2 x 12-15", "Pecho"],
          ["Elevaciones laterales", "2 x 12-15", "Deltoides"],
          ["Extensión de tríceps", "3 x 10-12", "Tríceps"],
        ],
      },

      {
        nombre: "PULL 2",

        descripcion: "Segunda sesión de tracción.",

        ejercicios: [
          ["Dominadas asistidas", "3 x 6-10", "Dorsales"],
          ["Remo con mancuerna", "3 x 10-12", "Espalda"],
          ["Pullover en polea", "2 x 12-15", "Dorsales"],
          ["Pájaros", "2 x 12-15", "Deltoides posterior"],
          ["Curl martillo", "3 x 10-12", "Bíceps"],
        ],
      },

      {
        nombre: "LEGS 2",

        descripcion: "Segunda sesión de piernas.",

        ejercicios: [
          ["Prensa", "3 x 10-12", "Cuádriceps"],
          ["Hip thrust", "3 x 8-12", "Glúteos"],
          ["Sentadilla goblet", "2 x 10-12", "Cuádriceps"],
          ["Curl femoral", "3 x 10-12", "Isquiotibiales"],
          ["Gemelos", "3 x 12-15", "Gemelos"],
        ],
      },
    ],
  },
};

// ======================================
// 2. VARIABLES Y ELEMENTOS DEL HTML
// ======================================

const OBTENER = (ID) => document.getElementById(ID);

const BOTONES_SISTEMA = document.querySelectorAll(".BOTON-SISTEMA");

const BOTONES_SEMANA = document.querySelectorAll(".BOTON-SEMANA");

let SISTEMA_ACTUAL = "UPPER-LOWER";

let SEMANA_ACTUAL = 1;

let SESION_SELECCIONADA = null;

const CLAVE = "FITNESSGYM_PROGRESO_SISTEMAS";

let PROGRESO = {};

// ======================================
// 3. RECUPERAR PROGRESO GUARDADO
// ======================================

try {
  PROGRESO = JSON.parse(localStorage.getItem(CLAVE)) || {};
} catch (ERROR) {
  PROGRESO = {};
}

// ======================================
// 4. FUNCIONES DE PROGRESO
// ======================================

function CLAVE_SESION(SEMANA, INDICE) {
  return `${SISTEMA_ACTUAL}-S${SEMANA}-D${INDICE}`;
}

function COMPLETADA(SEMANA, INDICE) {
  return PROGRESO[CLAVE_SESION(SEMANA, INDICE)] === true;
}

function GUARDAR() {
  localStorage.setItem(CLAVE, JSON.stringify(PROGRESO));
}

function ACTUALIZAR_PROGRESO() {
  const TOTAL = SISTEMAS[SISTEMA_ACTUAL].sesiones.length * 4;

  let HECHAS = 0;

  for (let S = 1; S <= 4; S++) {
    SISTEMAS[SISTEMA_ACTUAL].sesiones.forEach((SESION, INDICE) => {
      if (COMPLETADA(S, INDICE)) {
        HECHAS++;
      }
    });
  }

  const PORCENTAJE = Math.round((HECHAS / TOTAL) * 100);

  OBTENER("PORCENTAJE").textContent = `${PORCENTAJE}%`;

  OBTENER("CONTADOR-SESIONES").textContent = `${HECHAS}/${TOTAL} SESIONES`;

  OBTENER("PROGRESO-RELLENO").style.width = `${PORCENTAJE}%`;
}

// ======================================
// 5. MOSTRAR TARJETAS DE SESIONES
// ======================================

function MOSTRAR_SESIONES() {
  const CONTENEDOR = OBTENER("TARJETAS-SESIONES");

  CONTENEDOR.innerHTML = "";

  OBTENER("TITULO-SESIONES").textContent =
    `SESIONES DE LA SEMANA ${SEMANA_ACTUAL}`;

  SISTEMAS[SISTEMA_ACTUAL].sesiones.forEach((SESION, INDICE) => {
    const HECHA = COMPLETADA(SEMANA_ACTUAL, INDICE);

    const TARJETA = document.createElement("article");

    TARJETA.className = HECHA ? "TARJETA-SESION COMPLETADA" : "TARJETA-SESION";

    TARJETA.innerHTML = `

                <span class="NUMERO-SESION">
                    SESIÓN ${INDICE + 1}
                </span>

                <h3>
                    ${SESION.nombre}
                </h3>

                <p>
                    ${SESION.descripcion}
                </p>

                <div class="PIE-TARJETA">

                    <span class="ESTADO-SESION">

                        ${HECHA ? "✓ COMPLETADA" : "○ PENDIENTE"}

                    </span>

                    <button
                        class="BOTON-DETALLE"
                        type="button">

                        VER SESIÓN →

                    </button>

                </div>

            `;

    TARJETA.querySelector(".BOTON-DETALLE").addEventListener("click", () => {
      ABRIR_SESION(INDICE);
    });

    CONTENEDOR.appendChild(TARJETA);
  });

  ACTUALIZAR_PROGRESO();
}

// ======================================
// 6. CAMBIAR DE SISTEMA
// ======================================

function CAMBIAR_SISTEMA(NUEVO) {
  if (!SISTEMAS[NUEVO]) return;

  SISTEMA_ACTUAL = NUEVO;

  SEMANA_ACTUAL = 1;

  BOTONES_SISTEMA.forEach((BOTON) => {
    BOTON.classList.toggle("ACTIVO", BOTON.dataset.sistema === NUEVO);
  });

  BOTONES_SEMANA.forEach((BOTON) => {
    BOTON.classList.toggle("ACTIVO", BOTON.dataset.semana === "1");
  });

  OBTENER("NOMBRE-SISTEMA").textContent = SISTEMAS[NUEVO].nombre;

  OBTENER("DESCRIPCION-SISTEMA").textContent = SISTEMAS[NUEVO].descripcion;

  MOSTRAR_SESIONES();
}

// ======================================
// 7. CAMBIAR DE SEMANA
// ======================================

function CAMBIAR_SEMANA(NUMERO) {
  SEMANA_ACTUAL = NUMERO;

  BOTONES_SEMANA.forEach((BOTON) => {
    BOTON.classList.toggle("ACTIVO", Number(BOTON.dataset.semana) === NUMERO);
  });

  MOSTRAR_SESIONES();
}

// ======================================
// 8. ABRIR DETALLES DE UNA SESIÓN
// ======================================

function ABRIR_SESION(INDICE) {
  const SESION = SISTEMAS[SISTEMA_ACTUAL].sesiones[INDICE];

  SESION_SELECCIONADA = INDICE;

  OBTENER("MODAL-ETIQUETA").textContent =
    `SEMANA ${SEMANA_ACTUAL} · SESIÓN ${INDICE + 1}`;

  OBTENER("MODAL-TITULO").textContent = SESION.nombre;

  OBTENER("MODAL-DESCRIPCION").textContent = SESION.descripcion;

  const LISTA = OBTENER("LISTA-EJERCICIOS");

  LISTA.innerHTML = "";

  SESION.ejercicios.forEach((EJERCICIO) => {
    const FILA = document.createElement("div");

    FILA.className = "FILA-EJERCICIO";

    const NOMBRE = document.createElement("strong");

    NOMBRE.textContent = EJERCICIO[0];

    const DOSIS = document.createElement("span");

    DOSIS.textContent = EJERCICIO[1];

    const MUSCULOS = document.createElement("small");

    MUSCULOS.textContent = `Músculos involucrados: ${EJERCICIO[2]}`;

    FILA.append(NOMBRE, DOSIS, MUSCULOS);

    LISTA.appendChild(FILA);
  });

  const HECHA = COMPLETADA(SEMANA_ACTUAL, INDICE);

  OBTENER("BOTON-COMPLETAR").disabled = HECHA;

  OBTENER("BOTON-COMPLETAR").textContent = HECHA
    ? "SESIÓN COMPLETADA"
    : "MARCAR COMO COMPLETADA";

  OBTENER("MODAL-FONDO").classList.add("ACTIVO");

  document.body.style.overflow = "hidden";
}

// ======================================
// 9. CERRAR VENTANA DE DETALLES
// ======================================

function CERRAR_MODAL() {
  OBTENER("MODAL-FONDO").classList.remove("ACTIVO");

  document.body.style.overflow = "";

  SESION_SELECCIONADA = null;
}

// ======================================
// 10. MARCAR SESIÓN COMO COMPLETADA
// ======================================

OBTENER("BOTON-COMPLETAR").addEventListener("click", () => {
  if (SESION_SELECCIONADA === null) return;

  PROGRESO[CLAVE_SESION(SEMANA_ACTUAL, SESION_SELECCIONADA)] = true;

  GUARDAR();

  CERRAR_MODAL();

  MOSTRAR_SESIONES();
});

// ======================================
// 11. EVENTOS DE LOS SISTEMAS
// ======================================

BOTONES_SISTEMA.forEach((BOTON) => {
  BOTON.addEventListener("click", () => {
    CAMBIAR_SISTEMA(BOTON.dataset.sistema);
  });
});

// ======================================
// 12. EVENTOS DE LAS SEMANAS
// ======================================

BOTONES_SEMANA.forEach((BOTON) => {
  BOTON.addEventListener("click", () => {
    CAMBIAR_SEMANA(Number(BOTON.dataset.semana));
  });
});

// ======================================
// 13. BOTÓN PARA CERRAR MODAL
// ======================================

OBTENER("BOTON-CERRAR").addEventListener("click", CERRAR_MODAL);

OBTENER("MODAL-FONDO").addEventListener("click", (EVENTO) => {
  if (EVENTO.target === OBTENER("MODAL-FONDO")) {
    CERRAR_MODAL();
  }
});

// ======================================
// 14. CERRAR MODAL CON ESCAPE
// ======================================

document.addEventListener("keydown", (EVENTO) => {
  if (
    EVENTO.key === "Escape" &&
    OBTENER("MODAL-FONDO").classList.contains("ACTIVO")
  ) {
    CERRAR_MODAL();
  }
});

// ======================================
// 15. REINICIAR PROGRESO
// ======================================

OBTENER("BOTON-REINICIAR").addEventListener("click", () => {
  const CONFIRMACION = confirm(
    "¿Querés borrar el progreso guardado de todos los sistemas?",
  );

  if (!CONFIRMACION) return;

  PROGRESO = {};

  GUARDAR();

  MOSTRAR_SESIONES();
});

// ======================================
// 16. MENÚ RESPONSIVE
// ======================================

OBTENER("BOTON-MENU").addEventListener("click", () => {
  const ABIERTO = OBTENER("NAVEGACION").classList.toggle("ACTIVO");

  OBTENER("BOTON-MENU").setAttribute(
    "aria-expanded",
    ABIERTO ? "true" : "false",
  );
});

// ======================================
// 17. INICIALIZAR PÁGINA
// ======================================

CAMBIAR_SISTEMA("UPPER-LOWER");
