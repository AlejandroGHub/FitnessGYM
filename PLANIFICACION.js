// =====================================
// CONFIGURACIÓN INICIAL
// =====================================

const CLAVE_ALMACENAMIENTO = "FITNESSGYM-ATLETAS";

let ATLETAS = JSON.parse(localStorage.getItem(CLAVE_ALMACENAMIENTO)) || [];

let ID_EDICION = null;

// =====================================
// ELEMENTOS HTML
// =====================================

const MODAL = document.getElementById("MODAL-ATLETA");

const FORMULARIO = document.getElementById("FORMULARIO-ATLETA");

const BOTON_AGREGAR = document.getElementById("AGREGAR-ATLETA");

const BOTON_CERRAR = document.getElementById("CERRAR-MODAL");

const BOTON_CANCELAR = document.getElementById("CANCELAR-REGISTRO");

const LISTADO = document.getElementById("LISTADO-ATLETAS");

const BUSCADOR = document.getElementById("BUSCADOR-ATLETAS");

const FILTRO_OBJETIVO = document.getElementById("FILTRO-OBJETIVO");

const FILTRO_ESTADO = document.getElementById("FILTRO-ESTADO");

// =====================================
// FECHA ACTUAL
// =====================================

const FECHA_ACTUAL = document.getElementById("FECHA-ACTUAL");

FECHA_ACTUAL.textContent = new Date().toLocaleDateString("es-AR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

// =====================================
// ABRIR MODAL
// =====================================

BOTON_AGREGAR.addEventListener("click", function () {
  FORMULARIO.reset();

  ID_EDICION = null;

  document.getElementById("TITULO-MODAL").textContent = "REGISTRAR ATLETA";

  document.getElementById("GUARDAR-ATLETA").textContent = "GUARDAR ATLETA";

  document.getElementById("FECHA-INGRESO").value = new Date()
    .toISOString()
    .split("T")[0];

  MODAL.classList.add("VISIBLE");
});

// =====================================
// CERRAR MODAL
// =====================================

function CERRAR_MODAL() {
  MODAL.classList.remove("VISIBLE");

  FORMULARIO.reset();

  ID_EDICION = null;
}

BOTON_CERRAR.addEventListener("click", CERRAR_MODAL);

BOTON_CANCELAR.addEventListener("click", CERRAR_MODAL);

// =====================================
// GUARDAR DATOS
// =====================================

function GUARDAR_DATOS() {
  localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(ATLETAS));
}

// =====================================
// REGISTRAR Y EDITAR ATLETAS
// =====================================

FORMULARIO.addEventListener("submit", function (EVENTO) {
  EVENTO.preventDefault();

  const FECHA_NACIMIENTO = document.getElementById("FECHA-NACIMIENTO").value;

  const FECHA_INGRESO = document.getElementById("FECHA-INGRESO").value;

  const HOY = new Date();

  const NACIMIENTO = new Date(FECHA_NACIMIENTO + "T00:00:00");

  if (NACIMIENTO > HOY || FECHA_INGRESO > HOY.toISOString().split("T")[0]) {
    alert("Las fechas ingresadas no pueden ser futuras.");

    return;
  }

  let EDAD = HOY.getFullYear() - NACIMIENTO.getFullYear();

  const DIFERENCIA_MESES = HOY.getMonth() - NACIMIENTO.getMonth();

  if (
    DIFERENCIA_MESES < 0 ||
    (DIFERENCIA_MESES === 0 && HOY.getDate() < NACIMIENTO.getDate())
  ) {
    EDAD--;
  }

  if (EDAD < 14 || EDAD > 100) {
    alert(
      "Verificá la fecha de nacimiento. La edad debe estar entre 14 y 100 años.",
    );

    return;
  }

  const ATLETA = {
    ID: ID_EDICION || Date.now().toString(),

    NOMBRE: document.getElementById("NOMBRE-ATLETA").value.trim(),

    APELLIDO: document.getElementById("APELLIDO-ATLETA").value.trim(),

    EDAD: EDAD,

    FECHA_NACIMIENTO: FECHA_NACIMIENTO,

    PESO: Number(document.getElementById("PESO-ATLETA").value),

    ALTURA: Number(document.getElementById("ALTURA-ATLETA").value),

    OBJETIVO: document.getElementById("OBJETIVO-ATLETA").value,

    NIVEL: document.getElementById("NIVEL-ATLETA").value,

    FRECUENCIA: document.getElementById("FRECUENCIA-ATLETA").value,

    FECHA_INGRESO: FECHA_INGRESO,

    ESTADO: document.getElementById("ESTADO-ATLETA").value,

    OBSERVACIONES: document.getElementById("OBSERVACIONES-ATLETA").value.trim(),
  };

  if (
    !ATLETA.NOMBRE ||
    !ATLETA.APELLIDO ||
    !Number.isFinite(ATLETA.PESO) ||
    !Number.isFinite(ATLETA.ALTURA) ||
    ATLETA.PESO <= 0 ||
    ATLETA.ALTURA <= 0
  ) {
    alert("Completá correctamente todos los campos.");

    return;
  }

  if (ID_EDICION) {
    const INDICE = ATLETAS.findIndex((A) => A.ID === ID_EDICION);

    if (INDICE !== -1) {
      ATLETAS[INDICE] = ATLETA;
    }

    alert("Atleta actualizado correctamente.");
  } else {
    ATLETAS.push(ATLETA);

    alert("Atleta registrado correctamente.");
  }

  GUARDAR_DATOS();

  MOSTRAR_ATLETAS();

  CERRAR_MODAL();
});

// =====================================
// MOSTRAR ATLETAS
// =====================================

function MOSTRAR_ATLETAS() {
  LISTADO.innerHTML = "";

  const BUSQUEDA = BUSCADOR.value.toLowerCase().trim();

  const OBJETIVO = FILTRO_OBJETIVO.value;

  const ESTADO = FILTRO_ESTADO.value;

  const ATLETAS_FILTRADOS = ATLETAS.filter((ATLETA) => {
    const NOMBRE_COMPLETO = `${ATLETA.NOMBRE} ${ATLETA.APELLIDO}`.toLowerCase();

    const COINCIDE_NOMBRE = NOMBRE_COMPLETO.includes(BUSQUEDA);

    const COINCIDE_OBJETIVO = OBJETIVO === "" || ATLETA.OBJETIVO === OBJETIVO;

    const COINCIDE_ESTADO = ESTADO === "" || ATLETA.ESTADO === ESTADO;

    return COINCIDE_NOMBRE && COINCIDE_OBJETIVO && COINCIDE_ESTADO;
  });

  // ACTUALIZAR INDICADORES

  document.getElementById("TOTAL-ATLETAS").textContent = ATLETAS.length;

  document.getElementById("ATLETAS-ACTIVOS").textContent = ATLETAS.filter(
    (A) => A.ESTADO === "ACTIVO",
  ).length;

  document.getElementById("TOTAL-PLANIFICACIONES").textContent = JSON.parse(
    localStorage.getItem("FITNESSGYM-PLANIFICACIONES") || "[]",
  ).length;

  document.getElementById("TOTAL-SEGUIMIENTOS").textContent = "0";

  // MENSAJE SIN RESULTADOS

  if (ATLETAS_FILTRADOS.length === 0) {
    const MENSAJE = document.createElement("div");

    MENSAJE.className = "MENSAJE-VACIO";

    MENSAJE.innerHTML = `
            <span>♙</span>
            <h3>${ATLETAS.length === 0 ? "TODAVÍA NO HAY ATLETAS" : "NO SE ENCONTRARON RESULTADOS"}</h3>
            <p>${ATLETAS.length === 0 ? "Agregá tu primer atleta para comenzar." : "Probá modificando los filtros de búsqueda."}</p>
        `;

    LISTADO.appendChild(MENSAJE);

    return;
  }

  // GENERAR TARJETAS

  ATLETAS_FILTRADOS.forEach((ATLETA) => {
    const TARJETA = document.createElement("article");

    TARJETA.className = "TARJETA-ATLETA";

    const INICIALES = (ATLETA.NOMBRE[0] + ATLETA.APELLIDO[0]).toUpperCase();

    TARJETA.innerHTML = `

            <div class="ENCABEZADO-ATLETA">

                <div class="AVATAR-ATLETA">
                    ${INICIALES}
                </div>

                <div class="DATOS-NOMBRE-ATLETA">

                    <h3>${ESCAPAR_HTML(ATLETA.NOMBRE)} ${ESCAPAR_HTML(ATLETA.APELLIDO)}</h3>

                    <p>${ATLETA.EDAD} años · ${ESCAPAR_HTML(ATLETA.NIVEL)}</p>

                </div>

                <span class="ESTADO-ATLETA ${ATLETA.ESTADO === "INACTIVO" ? "INACTIVO" : ""}">
                    ${ATLETA.ESTADO}
                </span>

            </div>


            <div class="INFORMACION-ATLETA">

                <div class="DATO-ATLETA">

                    <span>OBJETIVO</span>

                    <strong>${ATLETA.OBJETIVO}</strong>

                </div>


                <div class="DATO-ATLETA">

                    <span>PESO</span>

                    <strong>${ATLETA.PESO} kg</strong>

                </div>


                <div class="DATO-ATLETA">

                    <span>ALTURA</span>

                    <strong>${ATLETA.ALTURA} cm</strong>

                </div>


                <div class="DATO-ATLETA">

                    <span>FRECUENCIA</span>

                    <strong>${ATLETA.FRECUENCIA} días semanales</strong>

                </div>

            </div>


            <div class="ACCIONES-ATLETA">

                <button type="button" data-accion="VER" data-id="${ATLETA.ID}">
                    VER
                </button>

                <button type="button" data-accion="EDITAR" data-id="${ATLETA.ID}">
                    EDITAR
                </button>

                <button type="button" class="BOTON-ELIMINAR" data-accion="ELIMINAR" data-id="${ATLETA.ID}">
                    ELIMINAR
                </button>

            </div>

        `;

    LISTADO.appendChild(TARJETA);
  });
}

// =====================================
// PROTECCIÓN DE TEXTO HTML
// =====================================

function ESCAPAR_HTML(TEXTO) {
  return String(TEXTO).replace(/[&<>"']/g, (CARACTER) => {
    const CARACTERES = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return CARACTERES[CARACTER];
  });
}

// =====================================
// ACCIONES DE LAS TARJETAS
// =====================================

LISTADO.addEventListener("click", function (EVENTO) {
  const BOTON = EVENTO.target.closest("button[data-accion]");

  if (!BOTON) return;

  const ID = BOTON.dataset.id;

  const ACCION = BOTON.dataset.accion;

  const ATLETA = ATLETAS.find((A) => A.ID === ID);

  if (!ATLETA) return;

  // VER INFORMACIÓN

  // VER INFORMACIÓN: ABRIR FICHA INDIVIDUAL

  if (ACCION === "VER") {
    ABRIR_FICHA_ATLETA(ID);
  }
  // EDITAR INFORMACIÓN

  if (ACCION === "EDITAR") {
    ID_EDICION = ID;

    document.getElementById("TITULO-MODAL").textContent = "EDITAR ATLETA";

    document.getElementById("GUARDAR-ATLETA").textContent = "GUARDAR CAMBIOS";

    document.getElementById("NOMBRE-ATLETA").value = ATLETA.NOMBRE;

    document.getElementById("APELLIDO-ATLETA").value = ATLETA.APELLIDO;

    document.getElementById("FECHA-NACIMIENTO").value = ATLETA.FECHA_NACIMIENTO;

    document.getElementById("PESO-ATLETA").value = ATLETA.PESO;

    document.getElementById("ALTURA-ATLETA").value = ATLETA.ALTURA;

    document.getElementById("OBJETIVO-ATLETA").value = ATLETA.OBJETIVO;

    document.getElementById("NIVEL-ATLETA").value = ATLETA.NIVEL;

    document.getElementById("FRECUENCIA-ATLETA").value = ATLETA.FRECUENCIA;

    document.getElementById("FECHA-INGRESO").value = ATLETA.FECHA_INGRESO;

    document.getElementById("ESTADO-ATLETA").value = ATLETA.ESTADO;

    document.getElementById("OBSERVACIONES-ATLETA").value =
      ATLETA.OBSERVACIONES;

    MODAL.classList.add("VISIBLE");
  }

  // ELIMINAR ATLETA

  if (ACCION === "ELIMINAR") {
    const CONFIRMACION = confirm(
      "¿Estás seguro de que querés eliminar a " +
        ATLETA.NOMBRE +
        " " +
        ATLETA.APELLIDO +
        "?",
    );

    if (!CONFIRMACION) return;

    ATLETAS = ATLETAS.filter((A) => A.ID !== ID);

    GUARDAR_DATOS();

    MOSTRAR_ATLETAS();
  }
});

// =====================================
// BUSCADOR Y FILTROS
// =====================================

BUSCADOR.addEventListener("input", MOSTRAR_ATLETAS);

FILTRO_OBJETIVO.addEventListener("change", MOSTRAR_ATLETAS);

FILTRO_ESTADO.addEventListener("change", MOSTRAR_ATLETAS);

// =====================================
// INICIALIZAR PANEL
// =====================================

MOSTRAR_ATLETAS();

// =================================
// FICHA INDIVIDUAL DEL ATLETA
// =================================
let ID_ATLETA_FICHA = null;
function ABRIR_FICHA_ATLETA(ID_ATLETA) {
  ID_ATLETA_FICHA = ID_ATLETA;
  const ATLETAS = JSON.parse(localStorage.getItem("FITNESSGYM-ATLETAS")) || [];

  const ATLETA = ATLETAS.find((A) => String(A.ID) === String(ID_ATLETA));

  if (!ATLETA) {
    alert("No se encontró la información del atleta.");

    return;
  }

  // DATOS PERSONALES

  document.getElementById("FICHA-NOMBRE-COMPLETO").textContent =
    `${ATLETA.NOMBRE} ${ATLETA.APELLIDO}`;

  document.getElementById("FICHA-NOMBRE").textContent =
    ATLETA.NOMBRE || "Sin información";

  document.getElementById("FICHA-APELLIDO").textContent =
    ATLETA.APELLIDO || "Sin información";

  document.getElementById("FICHA-EDAD").textContent = ATLETA.EDAD
    ? `${ATLETA.EDAD} años`
    : "Sin información";

  document.getElementById("FICHA-NACIMIENTO").textContent =
    ATLETA.FECHA_NACIMIENTO || "Sin información";

  // INFORMACIÓN FÍSICA

  document.getElementById("FICHA-PESO").textContent = ATLETA.PESO
    ? `${ATLETA.PESO} kg`
    : "Sin información";

  document.getElementById("FICHA-ALTURA").textContent = ATLETA.ALTURA
    ? `${ATLETA.ALTURA} cm`
    : "Sin información";

  // ENTRENAMIENTO

  document.getElementById("FICHA-OBJETIVO").textContent =
    ATLETA.OBJETIVO || "Sin información";

  document.getElementById("FICHA-NIVEL").textContent =
    ATLETA.NIVEL || "Sin información";

  document.getElementById("FICHA-FRECUENCIA").textContent = ATLETA.FRECUENCIA
    ? `${ATLETA.FRECUENCIA} días por semana`
    : "Sin información";

  // INFORMACIÓN ADICIONAL

  document.getElementById("FICHA-ESTADO").textContent =
    ATLETA.ESTADO || "Sin información";

  document.getElementById("FICHA-INGRESO").textContent =
    ATLETA.FECHA_INGRESO || "Sin información";

  document.getElementById("FICHA-OBSERVACIONES").textContent =
    ATLETA.OBSERVACIONES || "Sin observaciones";

  // MOSTRAR FICHA

  // MOSTRAR PLANIFICACIONES DEL ATLETA

  MOSTRAR_PLANIFICACIONES_ATLETA(ID_ATLETA);

  // MOSTRAR FICHA

  document.getElementById("FONDO-FICHA").classList.add("ACTIVO");
}

// CERRAR FICHA

document.getElementById("CERRAR-FICHA").addEventListener("click", function () {
  document.getElementById("FONDO-FICHA").classList.remove("ACTIVO");
});

// CERRAR AL PRESIONAR FUERA DE LA VENTANA

document.getElementById("FONDO-FICHA").addEventListener("click", function (E) {
  if (E.target === this) {
    this.classList.remove("ACTIVO");
  }
});

// =====================================
// CERRAR VENTANAS CON ESCAPE
// =====================================

document.addEventListener("keydown", function (EVENTO) {
  if (EVENTO.key === "Escape") {
    // CERRAR PLANIFICACIÓN SI ESTÁ ABIERTA
    if (FONDO_PLANIFICACION.classList.contains("ACTIVO")) {
      CERRAR_PLANIFICACION();
    } else {
      // CERRAR FICHA SI ESTÁ ABIERTA
      document.getElementById("FONDO-FICHA").classList.remove("ACTIVO");
    }
  }
});

// =====================================
// PLANIFICACIÓN DEL ATLETA
// =====================================

// ELEMENTOS HTML

const BOTON_PLANIFICAR = document.getElementById("BOTON-PLANIFICAR");

const FONDO_PLANIFICACION = document.getElementById("FONDO-PLANIFICACION");

const FORMULARIO_PLANIFICACION = document.getElementById(
  "FORMULARIO-PLANIFICACION",
);

const ID_ATLETA_PLANIFICACION = document.getElementById(
  "ID-ATLETA-PLANIFICACION",
);

const NOMBRE_ATLETA_PLANIFICACION = document.getElementById(
  "NOMBRE-ATLETA-PLANIFICACION",
);

const BOTON_CERRAR_PLANIFICACION = document.getElementById(
  "CERRAR-PLANIFICACION",
);

const BOTON_CANCELAR_PLANIFICACION = document.getElementById(
  "CANCELAR-PLANIFICACION",
);

// =====================================
// ABRIR PLANIFICACIÓN
// =====================================

function ABRIR_PLANIFICACION(ID_ATLETA) {
  const ATLESTAS_GUARDADOS =
    JSON.parse(localStorage.getItem("FITNESSGYM-ATLETAS")) || [];

  const ATLETA = ATLESTAS_GUARDADOS.find(
    (A) => String(A.ID) === String(ID_ATLETA),
  );

  if (!ATLETA) {
    alert("No se encontró el atleta seleccionado.");
    return;
  }

  // LIMPIAR FORMULARIO

  FORMULARIO_PLANIFICACION.reset();
  // INICIAR MODO CREACIÓN

  ID_PLANIFICACION_EDICION = null;

  document.getElementById("GUARDAR-PLANIFICACION").textContent =
    "GUARDAR PLANIFICACIÓN";

  // LIMPIAR EJERCICIOS ANTERIORES

  LISTA_EJERCICIOS.innerHTML = "";

  // AGREGAR PRIMER EJERCICIO

  AGREGAR_EJERCICIO();

  // IDENTIFICAR ATLETA

  ID_ATLETA_PLANIFICACION.value = ATLETA.ID;

  NOMBRE_ATLETA_PLANIFICACION.value = `${ATLETA.NOMBRE} ${ATLETA.APELLIDO}`;

  // MOSTRAR VENTANA

  FONDO_PLANIFICACION.classList.add("ACTIVO");
}

// =====================================
// CONECTAR BOTÓN PLANIFICAR
// =====================================

BOTON_PLANIFICAR.addEventListener("click", function () {
  if (!ID_ATLETA_FICHA) {
    alert("No se pudo identificar al atleta.");
    return;
  }

  ABRIR_PLANIFICACION(ID_ATLETA_FICHA);
});

// =====================================
// CERRAR PLANIFICACIÓN
// =====================================

function CERRAR_PLANIFICACION() {
  FONDO_PLANIFICACION.classList.remove("ACTIVO");

  FORMULARIO_PLANIFICACION.reset();
}

// BOTÓN CERRAR

BOTON_CERRAR_PLANIFICACION.addEventListener("click", CERRAR_PLANIFICACION);

// BOTÓN CANCELAR

BOTON_CANCELAR_PLANIFICACION.addEventListener("click", CERRAR_PLANIFICACION);

// CERRAR AL PRESIONAR FUERA DE LA VENTANA

FONDO_PLANIFICACION.addEventListener("click", function (EVENTO) {
  if (EVENTO.target === FONDO_PLANIFICACION) {
    CERRAR_PLANIFICACION();
  }
});

// =====================================
// GESTIÓN DE EJERCICIOS
// =====================================

// ELEMENTOS HTML

const LISTA_EJERCICIOS = document.getElementById(
  "LISTA-EJERCICIOS-PLANIFICACION",
);

const BOTON_AGREGAR_EJERCICIO = document.getElementById("AGREGAR-EJERCICIO");

// =====================================
// AGREGAR EJERCICIO
// =====================================

function AGREGAR_EJERCICIO() {
  const EJERCICIO = document.createElement("div");

  EJERCICIO.className = "ITEM-EJERCICIO";

  EJERCICIO.innerHTML = `

        <div class="ENCABEZADO-EJERCICIO">

            <h4>Nuevo ejercicio</h4>

            <button
                type="button"
                class="ELIMINAR-EJERCICIO"
                data-accion="ELIMINAR-EJERCICIO"
            >
                ✕
            </button>

        </div>

        <div class="CAMPOS-EJERCICIO">

            <div class="CAMPO-PLANIFICACION">

                <label>Nombre del ejercicio</label>

                <input
                    type="text"
                    class="NOMBRE-EJERCICIO"
                    placeholder="Ej: Press de banca"
                    required
                >

            </div>

            <div class="CAMPO-PLANIFICACION">

                <label>Series</label>

                <input
                    type="number"
                    class="SERIES-EJERCICIO"
                    min="1"
                    max="20"
                    placeholder="4"
                    required
                >

            </div>

            <div class="CAMPO-PLANIFICACION">

                <label>Repeticiones</label>

                <input
                    type="number"
                    class="REPETICIONES-EJERCICIO"
                    min="1"
                    max="100"
                    placeholder="12"
                    required
                >

            </div>

            <div class="CAMPO-PLANIFICACION">

                <label>Descanso (segundos)</label>

                <input
                    type="number"
                    class="DESCANSO-EJERCICIO"
                    min="0"
                    max="3600"
                    placeholder="90"
                    required
                >

            </div>

        </div>

    `;

  LISTA_EJERCICIOS.appendChild(EJERCICIO);
}

// =====================================
// BOTÓN AGREGAR EJERCICIO
// =====================================

BOTON_AGREGAR_EJERCICIO.addEventListener("click", AGREGAR_EJERCICIO);

// =====================================
// ELIMINAR EJERCICIO
// =====================================

LISTA_EJERCICIOS.addEventListener("click", function (EVENTO) {
  const BOTON = EVENTO.target.closest('[data-accion="ELIMINAR-EJERCICIO"]');

  if (!BOTON) return;

  const EJERCICIO = BOTON.closest(".ITEM-EJERCICIO");

  EJERCICIO.remove();
});

// =====================================
// GUARDAR PLANIFICACIONES
// =====================================

// ALMACENAMIENTO DE PLANIFICACIONES
const CLAVE_PLANIFICACIONES = "FITNESSGYM-PLANIFICACIONES";

let PLANIFICACIONES =
  JSON.parse(localStorage.getItem(CLAVE_PLANIFICACIONES)) || [];

// IDENTIFICAR PLANIFICACIÓN QUE SE ESTÁ EDITANDO
let ID_PLANIFICACION_EDICION = null;

// ALMACENAMIENTO DEL PROGRESO

const CLAVE_PROGRESO = "FITNESSGYM-PROGRESOS";

let PROGRESOS = JSON.parse(localStorage.getItem(CLAVE_PROGRESO)) || [];

let ID_REGISTRO_EDICION = null;

// GUARDAR RUTINA
FORMULARIO_PLANIFICACION.addEventListener("submit", function (EVENTO) {
  EVENTO.preventDefault();

  // OBTENER DÍAS SELECCIONADOS
  const DIAS = Array.from(
    document.querySelectorAll(
      ".DIAS-PLANIFICACION input[type='checkbox']:checked",
    ),
  ).map((CHECKBOX) => CHECKBOX.value);

  // OBTENER EJERCICIOS
  const EJERCICIOS = Array.from(
    LISTA_EJERCICIOS.querySelectorAll(".ITEM-EJERCICIO"),
  ).map((ITEM) => {
    return {
      NOMBRE: ITEM.querySelector(".NOMBRE-EJERCICIO").value.trim(),
      SERIES: Number(ITEM.querySelector(".SERIES-EJERCICIO").value),
      REPETICIONES: Number(ITEM.querySelector(".REPETICIONES-EJERCICIO").value),
      DESCANSO: Number(ITEM.querySelector(".DESCANSO-EJERCICIO").value),
    };
  });

  // VALIDAR DÍAS
  if (DIAS.length === 0) {
    alert("Seleccioná al menos un día de entrenamiento.");
    return;
  }

  // VALIDAR EJERCICIOS
  if (EJERCICIOS.length === 0) {
    alert("Agregá al menos un ejercicio.");
    return;
  }

  // CREAR PLANIFICACIÓN
  const NUEVA_PLANIFICACION = {
    ID: Date.now().toString(),

    ID_ATLETA: ID_ATLETA_PLANIFICACION.value,

    OBJETIVO: document.getElementById("OBJETIVO-PLANIFICACION").value,

    NOMBRE: document.getElementById("NOMBRE-RUTINA").value.trim(),

    DIAS: DIAS,

    EJERCICIOS: EJERCICIOS,

    OBSERVACIONES: document
      .getElementById("OBSERVACIONES-PLANIFICACION")
      .value.trim(),

    FECHA_CREACION: new Date().toLocaleDateString("es-AR"),
  };

  // =====================================
  // GUARDAR O ACTUALIZAR PLANIFICACIÓN
  // =====================================

  if (ID_PLANIFICACION_EDICION) {
    const INDICE = PLANIFICACIONES.findIndex(
      (P) => String(P.ID) === String(ID_PLANIFICACION_EDICION),
    );

    if (INDICE !== -1) {
      PLANIFICACIONES[INDICE] = {
        ...NUEVA_PLANIFICACION,
        ID: ID_PLANIFICACION_EDICION,
        FECHA_CREACION: PLANIFICACIONES[INDICE].FECHA_CREACION,
      };
    }

    alert("¡Planificación actualizada correctamente!");
  } else {
    PLANIFICACIONES.push(NUEVA_PLANIFICACION);

    alert("¡Planificación guardada correctamente!");
  }

  localStorage.setItem(CLAVE_PLANIFICACIONES, JSON.stringify(PLANIFICACIONES));

  // RESTABLECER MODO EDICIÓN

  ID_PLANIFICACION_EDICION = null;

  // ACTUALIZAR CONTADOR
  const CONTADOR_PLANIFICACIONES = document.getElementById(
    "TOTAL-PLANIFICACIONES",
  );

  CONTADOR_PLANIFICACIONES.textContent = PLANIFICACIONES.length;

  MOSTRAR_PLANIFICACIONES_ATLETA(ID_ATLETA_PLANIFICACION.value);

  alert("¡Planificación guardada correctamente!");

  CERRAR_PLANIFICACION();
});

// =====================================
// MOSTRAR PLANIFICACIONES DEL ATLETA
// =====================================

const LISTA_PLANIFICACIONES_ATLETA = document.getElementById(
  "LISTA-PLANIFICACIONES-ATLETA",
);

// =====================================
// MOSTRAR PLANIFICACIONES DEL ATLETA
// =====================================

function MOSTRAR_PLANIFICACIONES_ATLETA(ID_ATLETA) {
  const PLANES_ATLETA = PLANIFICACIONES.filter(
    (PLAN) => String(PLAN.ID_ATLETA) === String(ID_ATLETA),
  );

  LISTA_PLANIFICACIONES_ATLETA.innerHTML = "";

  // SIN PLANIFICACIONES

  if (PLANES_ATLETA.length === 0) {
    LISTA_PLANIFICACIONES_ATLETA.innerHTML = `
      <p>Este atleta todavía no tiene rutinas asignadas.</p>
    `;

    return;
  }

  // GENERAR TARJETAS

  PLANES_ATLETA.forEach((PLAN) => {
    const TARJETA = document.createElement("article");

    TARJETA.className = "TARJETA-PLANIFICACION";

    const EJERCICIOS_HTML = PLAN.EJERCICIOS.map((EJERCICIO) => {
      return `
        <div class="DETALLE-EJERCICIO">

          <strong>${ESCAPAR_HTML(EJERCICIO.NOMBRE)}</strong>

          <p>
            ${EJERCICIO.SERIES} series ×
            ${EJERCICIO.REPETICIONES} repeticiones
          </p>

          <p>
            Descanso: ${EJERCICIO.DESCANSO} segundos
          </p>

        </div>
      `;
    }).join("");

    TARJETA.innerHTML = `

      <div class="ENCABEZADO-TARJETA-PLAN">

        <h4>${ESCAPAR_HTML(PLAN.NOMBRE)}</h4>

        <span>${ESCAPAR_HTML(PLAN.FECHA_CREACION)}</span>

      </div>

      <p>
        <strong>Objetivo:</strong>
        ${ESCAPAR_HTML(PLAN.OBJETIVO)}
      </p>

      <p>
        <strong>Días:</strong>
        ${PLAN.DIAS.map((DIA) => ESCAPAR_HTML(DIA)).join(" · ")}
      </p>

      <h5>EJERCICIOS</h5>

      <div class="EJERCICIOS-GUARDADOS">

        ${EJERCICIOS_HTML}

      </div>

      <p>
        <strong>Observaciones:</strong>
        ${ESCAPAR_HTML(PLAN.OBSERVACIONES || "Sin observaciones")}
      </p>

      <div class="ACCIONES-TARJETA-PLAN">

        <button
          type="button"
          class="BOTON-EDITAR-PLAN"
          data-accion="EDITAR-PLAN"
          data-id="${PLAN.ID}"
        >
          EDITAR
        </button>

        <button
          type="button"
          class="BOTON-ELIMINAR-PLAN"
          data-accion="ELIMINAR-PLAN"
          data-id="${PLAN.ID}"
        >
          ELIMINAR
        </button>

      </div>

    `;

    LISTA_PLANIFICACIONES_ATLETA.appendChild(TARJETA);
  });
}

// =====================================
// ACCIONES DE LAS PLANIFICACIONES
// =====================================

LISTA_PLANIFICACIONES_ATLETA.addEventListener("click", function (EVENTO) {
  const BOTON = EVENTO.target.closest("button[data-accion]");

  if (!BOTON) return;

  const ID = BOTON.dataset.id;

  const ACCION = BOTON.dataset.accion;

  const PLAN = PLANIFICACIONES.find((P) => String(P.ID) === String(ID));

  if (!PLAN) return;

  // =====================================
  // EDITAR PLANIFICACIÓN
  // =====================================

  if (ACCION === "EDITAR-PLAN") {
    ID_PLANIFICACION_EDICION = PLAN.ID;

    ABRIR_PLANIFICACION(PLAN.ID_ATLETA);

    // IDENTIFICAR MODO EDICIÓN

    ID_PLANIFICACION_EDICION = PLAN.ID;

    document.getElementById("GUARDAR-PLANIFICACION").textContent =
      "GUARDAR CAMBIOS";

    // CARGAR INFORMACIÓN

    document.getElementById("OBJETIVO-PLANIFICACION").value = PLAN.OBJETIVO;

    document.getElementById("NOMBRE-RUTINA").value = PLAN.NOMBRE;

    document.getElementById("OBSERVACIONES-PLANIFICACION").value =
      PLAN.OBSERVACIONES || "";

    // MARCAR DÍAS

    document
      .querySelectorAll(".DIAS-PLANIFICACION input[type='checkbox']")
      .forEach((CHECKBOX) => {
        CHECKBOX.checked = PLAN.DIAS.includes(CHECKBOX.value);
      });

    // CARGAR EJERCICIOS

    LISTA_EJERCICIOS.innerHTML = "";

    PLAN.EJERCICIOS.forEach((EJERCICIO) => {
      AGREGAR_EJERCICIO();

      const ITEMS = LISTA_EJERCICIOS.querySelectorAll(".ITEM-EJERCICIO");

      const ULTIMO = ITEMS[ITEMS.length - 1];

      ULTIMO.querySelector(".NOMBRE-EJERCICIO").value = EJERCICIO.NOMBRE;

      ULTIMO.querySelector(".SERIES-EJERCICIO").value = EJERCICIO.SERIES;

      ULTIMO.querySelector(".REPETICIONES-EJERCICIO").value =
        EJERCICIO.REPETICIONES;

      ULTIMO.querySelector(".DESCANSO-EJERCICIO").value = EJERCICIO.DESCANSO;
    });
  }

  // =====================================
  // ELIMINAR PLANIFICACIÓN
  // =====================================

  if (ACCION === "ELIMINAR-PLAN") {
    const CONFIRMACION = confirm(
      "¿Estás seguro de que querés eliminar esta planificación?",
    );

    if (!CONFIRMACION) return;

    PLANIFICACIONES = PLANIFICACIONES.filter(
      (P) => String(P.ID) !== String(ID),
    );

    localStorage.setItem(
      CLAVE_PLANIFICACIONES,
      JSON.stringify(PLANIFICACIONES),
    );

    MOSTRAR_PLANIFICACIONES_ATLETA(ID_ATLETA_FICHA);

    document.getElementById("TOTAL-PLANIFICACIONES").textContent =
      PLANIFICACIONES.length;

    alert("Planificación eliminada correctamente.");
  }
});

// ABRIR SEGUIMIENTO DEL PROGRESO

document.getElementById("BOTON-PROGRESO").addEventListener("click", () => {
  if (!ID_ATLETA_FICHA) {
    alert("No se pudo identificar al atleta.");
    return;
  }

  const FONDO = document.getElementById("FONDO-PROGRESO");

  FONDO.classList.add("ACTIVO");

  MOSTRAR_PROGRESOS_ATLETA(ID_ATLETA_FICHA);

  // Establecer la fecha actual

  const FECHA = new Date();

  const FECHA_LOCAL = new Date(
    FECHA.getTime() - FECHA.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split("T")[0];

  document.getElementById("FECHA-PROGRESO").value = FECHA_LOCAL;
});

// CERRAR SEGUIMIENTO DEL PROGRESO

document.getElementById("CERRAR-PROGRESO").addEventListener("click", () => {
  document.getElementById("FONDO-PROGRESO").classList.remove("ACTIVO");
});

// CERRAR AL HACER CLICK FUERA DEL MODAL

document
  .getElementById("FONDO-PROGRESO")
  .addEventListener("click", (EVENTO) => {
    if (EVENTO.target.id === "FONDO-PROGRESO") {
      EVENTO.currentTarget.classList.remove("ACTIVO");
    }
  });

// MOSTRAR HISTORIAL DE PROGRESO

// MOSTRAR HISTORIAL DE PROGRESO

function MOSTRAR_PROGRESOS_ATLETA(ID_ATLETA) {
  const CONTENEDOR = document.getElementById("LISTA-PROGRESO");

  CONTENEDOR.innerHTML = "";

  const HISTORIAL = PROGRESOS.filter(
    (P) => String(P.ID_ATLETA) === String(ID_ATLETA),
  ).sort((A, B) => B.FECHA.localeCompare(A.FECHA));

  if (HISTORIAL.length === 0) {
    CONTENEDOR.innerHTML = `
      <p>Todavía no hay registros de progreso.</p>
    `;

    return;
  }

  HISTORIAL.forEach((P) => {
    const TARJETA = document.createElement("div");

    TARJETA.classList.add("TARJETA-PROGRESO");

    TARJETA.innerHTML = `
      <h4>${P.FECHA}</h4>

      <p>Peso corporal: ${P.PESO} kg</p>

      <p>${P.OBSERVACIONES || "Sin observaciones."}</p>

      <div class="ACCIONES-PROGRESO">

        <button
          type="button"
          class="BOTON-EDITAR-PROGRESO"
          data-accion="EDITAR-PROGRESO"
          data-id="${P.ID}">
          EDITAR
        </button>

        <button
          type="button"
          class="BOTON-ELIMINAR-PROGRESO"
          data-accion="ELIMINAR-PROGRESO"
          data-id="${P.ID}">
          ELIMINAR
        </button>

      </div>
    `;

    CONTENEDOR.appendChild(TARJETA);
  });
}

// ACCIONES DEL HISTORIAL DE PROGRESO

document
  .getElementById("LISTA-PROGRESO")
  .addEventListener("click", (EVENTO) => {
    const BOTON = EVENTO.target.closest("button[data-accion]");

    if (!BOTON) return;

    const ID = BOTON.dataset.id;

    const ACCION = BOTON.dataset.accion;

    const REGISTRO = PROGRESOS.find((P) => String(P.ID) === String(ID));

    if (!REGISTRO) return;

    // EDITAR REGISTRO

    if (ACCION === "EDITAR-PROGRESO") {
      ID_REGISTRO_EDICION = REGISTRO.ID;

      document.getElementById("FECHA-PROGRESO").value = REGISTRO.FECHA;

      document.getElementById("PESO-PROGRESO").value = REGISTRO.PESO;

      document.getElementById("OBSERVACIONES-PROGRESO").value =
        REGISTRO.OBSERVACIONES;

      document.getElementById("GUARDAR-PROGRESO").textContent =
        "GUARDAR CAMBIOS";
    }

    // ELIMINAR REGISTRO

    if (ACCION === "ELIMINAR-PROGRESO") {
      const CONFIRMAR = confirm("¿Estás seguro de eliminar este registro?");

      if (!CONFIRMAR) return;

      PROGRESOS = PROGRESOS.filter((P) => String(P.ID) !== String(ID));

      localStorage.setItem(CLAVE_PROGRESO, JSON.stringify(PROGRESOS));

      MOSTRAR_PROGRESOS_ATLETA(ID_ATLETA_FICHA);

      alert("Registro eliminado correctamente.");
    }
  });
// GUARDAR REGISTRO DE PROGRESO

document
  .getElementById("FORMULARIO-PROGRESO")
  .addEventListener("submit", (EVENTO) => {
    EVENTO.preventDefault();

    if (!ID_ATLETA_FICHA) {
      alert("No se pudo identificar al atleta.");
      return;
    }

    const FECHA = document.getElementById("FECHA-PROGRESO").value;

    const PESO = Number(document.getElementById("PESO-PROGRESO").value);

    const OBSERVACIONES = document
      .getElementById("OBSERVACIONES-PROGRESO")
      .value.trim();

    if (!FECHA || !Number.isFinite(PESO) || PESO <= 0) {
      alert("Ingresá una fecha y un peso válido.");
      return;
    }

    const NUEVO_REGISTRO = {
      ID: ID_REGISTRO_EDICION || Date.now(),

      ID_ATLETA: ID_ATLETA_FICHA,

      FECHA: FECHA,

      PESO: PESO,

      OBSERVACIONES: OBSERVACIONES,
    };

    // COMPROBAR SI ESTAMOS EDITANDO

    if (ID_REGISTRO_EDICION) {
      const INDICE = PROGRESOS.findIndex(
        (P) => String(P.ID) === String(ID_REGISTRO_EDICION),
      );

      if (INDICE !== -1) {
        PROGRESOS[INDICE] = NUEVO_REGISTRO;
      }

      alert("¡Registro actualizado correctamente!");
    } else {
      PROGRESOS.push(NUEVO_REGISTRO);

      alert("¡Registro guardado correctamente!");
    }

    // GUARDAR EN LOCALSTORAGE

    localStorage.setItem(CLAVE_PROGRESO, JSON.stringify(PROGRESOS));

    // RESTABLECER FORMULARIO

    ID_REGISTRO_EDICION = null;

    document.getElementById("FORMULARIO-PROGRESO").reset();

    document.getElementById("GUARDAR-PROGRESO").textContent =
      "GUARDAR REGISTRO";

    MOSTRAR_PROGRESOS_ATLETA(ID_ATLETA_FICHA);
  });
