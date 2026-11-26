// ELEMENTOS DEL MENU

const BOTON_MENU = document.getElementById("BOTON-MENU");

const MENU_DESPLEGABLE = document.getElementById("MENU-DESPLEGABLE");

// ABRIR Y CERRAR MENU

BOTON_MENU.addEventListener("click", () => {
  MENU_DESPLEGABLE.classList.toggle("ACTIVO");
});

// CERRAR MENU AL HACER CLICK FUERA

document.addEventListener("click", (EVENTO) => {
  if (
    !BOTON_MENU.contains(EVENTO.target) &&
    !MENU_DESPLEGABLE.contains(EVENTO.target)
  ) {
    MENU_DESPLEGABLE.classList.remove("ACTIVO");
  }
});

// CERRAR MENU AL SELECCIONAR UNA OPCION

const ENLACES_MENU = MENU_DESPLEGABLE.querySelectorAll("a");

ENLACES_MENU.forEach((ENLACE) => {
  ENLACE.addEventListener("click", () => {
    MENU_DESPLEGABLE.classList.remove("ACTIVO");
  });
});

// CERRAR MENU CON LA TECLA ESCAPE

document.addEventListener("keydown", (EVENTO) => {
  if (EVENTO.key === "Escape") {
    MENU_DESPLEGABLE.classList.remove("ACTIVO");
  }
});

/* =========================================
   INFORMACION DE LOS PRODUCTOS
========================================= */

const PRODUCTOS = {
  remera: {
    nombre: "REMERA DEPORTIVA",
    categoria: "INDUMENTARIA",
    precio: "Sin Stock",
    descripcion:
      "Remera deportiva ideal para entrenamientos de fuerza y actividad física.",
    imagen: "IMG/TIENDA/INDUMENTARIA/REMERA.png",
    tieneTalle: true,
  },

  musculosa: {
    nombre: "MUSCULOSA FITNESS",
    categoria: "INDUMENTARIA",
    precio: "Sin Stock",
    descripcion:
      "Musculosa cómoda y ligera para entrenar con libertad de movimiento.",
    imagen: "IMG/TIENDA/INDUMENTARIA/MUSCULOSA.png",
    tieneTalle: true,
  },

  short: {
    nombre: "SHORT DEPORTIVO",
    categoria: "INDUMENTARIA",
    precio: "Sin Stock",
    descripcion: "Short deportivo pensado para entrenamientos intensos.",
    imagen: "IMG/TIENDA/INDUMENTARIA/SHORT.png",
    tieneTalle: true,
  },

  pantalon: {
    nombre: "PANTALON JOGGER",
    categoria: "INDUMENTARIA",
    precio: "Sin Stock",
    descripcion:
      "Pantalón deportivo cómodo para entrenar o utilizar diariamente.",
    imagen: "IMG/TIENDA/INDUMENTARIA/PANTALON.png",
    tieneTalle: true,
  },

  guantes: {
    nombre: "GUANTES DE GIMNASIO",
    categoria: "ACCESORIOS",
    precio: "Sin Stock",
    descripcion:
      "Guantes diseñados para mejorar la comodidad durante el entrenamiento.",
    imagen: "IMG/TIENDA/ACCESORIOS/GUANTES.png",
    tieneTalle: false,
  },

  straps: {
    nombre: "STRAPS DE AGARRE",
    categoria: "ACCESORIOS",
    precio: "Sin Stock",
    descripcion:
      "Accesorio de entrenamiento para facilitar el agarre durante determinados ejercicios.",
    imagen: "IMG/TIENDA/ACCESORIOS/STRAPS.png",
    tieneTalle: false,
  },

  cinturon: {
    nombre: "CINTURON LUMBAR",
    categoria: "ACCESORIOS",
    precio: "Sin Stock",
    descripcion: "Cinturón de entrenamiento para ejercicios de fuerza.",
    imagen: "IMG/TIENDA/ACCESORIOS/CINTURON.png",
    tieneTalle: false,
  },

  shaker: {
    nombre: "SHAKER FITNESS",
    categoria: "ACCESORIOS",
    precio: "Sin Stock",
    descripcion: "Botella mezcladora para preparar bebidas deportivas.",
    imagen: "IMG/TIENDA/ACCESORIOS/SHAKER.png",
    tieneTalle: false,
  },
};

/* =========================================
   ELEMENTOS DEL MODAL
========================================= */

const FONDO_MODAL = document.getElementById("FONDO-MODAL");

const CERRAR_MODAL = document.getElementById("CERRAR-MODAL");

const MODAL_IMAGEN = document.getElementById("MODAL-IMAGEN");

const MODAL_NOMBRE = document.getElementById("MODAL-NOMBRE");

const MODAL_CATEGORIA = document.getElementById("MODAL-CATEGORIA");

const MODAL_DESCRIPCION = document.getElementById("MODAL-DESCRIPCION");

const MODAL_PRECIO = document.getElementById("MODAL-PRECIO");

const CONTENEDOR_TALLES = document.getElementById("CONTENEDOR-TALLES");

const SELECTOR_TALLE = document.getElementById("SELECTOR-TALLE");

const SELECTOR_COLOR = document.getElementById("SELECTOR-COLOR");

const BOTON_CARRITO = document.getElementById("BOTON-CARRITO");

const MENSAJE_CARRITO = document.getElementById("MENSAJE-CARRITO");

let PRODUCTO_SELECCIONADO = null;

/* =========================================
   ABRIR VENTANA DEL PRODUCTO
========================================= */

const BOTONES_PRODUCTO = document.querySelectorAll(".BOTON-PRODUCTO");

BOTONES_PRODUCTO.forEach((BOTON) => {
  BOTON.addEventListener("click", (EVENTO) => {
    EVENTO.stopPropagation();

    const TARJETA = BOTON.closest(".TARJETA-PRODUCTO");

    const IDENTIFICADOR = TARJETA.dataset.producto;

    const PRODUCTO = PRODUCTOS[IDENTIFICADOR];

    if (!PRODUCTO) {
      return;
    }

    PRODUCTO_SELECCIONADO = PRODUCTO;

    MODAL_IMAGEN.src = PRODUCTO.imagen;

    MODAL_IMAGEN.alt = PRODUCTO.nombre;

    MODAL_NOMBRE.textContent = PRODUCTO.nombre;

    MODAL_CATEGORIA.textContent = PRODUCTO.categoria;

    MODAL_DESCRIPCION.textContent = PRODUCTO.descripcion;

    MODAL_PRECIO.textContent = PRODUCTO.precio;

    CONTENEDOR_TALLES.style.display = PRODUCTO.tieneTalle ? "flex" : "none";

    SELECTOR_TALLE.value = "";

    SELECTOR_COLOR.value = "";

    MENSAJE_CARRITO.textContent = "";

    FONDO_MODAL.classList.add("ACTIVO");
  });
});

/* =========================================
   CERRAR VENTANA
========================================= */

CERRAR_MODAL.addEventListener("click", () => {
  FONDO_MODAL.classList.remove("ACTIVO");
});

FONDO_MODAL.addEventListener("click", (EVENTO) => {
  if (EVENTO.target === FONDO_MODAL) {
    FONDO_MODAL.classList.remove("ACTIVO");
  }
});

/* CERRAR CON ESCAPE */

document.addEventListener("keydown", (EVENTO) => {
  if (EVENTO.key === "Escape") {
    FONDO_MODAL.classList.remove("ACTIVO");
  }
});

/* =========================================
   AGREGAR AL CARRITO
========================================= */

/* =========================================
   CARRITO DE COMPRAS
========================================= */

let CARRITO = [];

/* ELEMENTOS DEL CARRITO */

const BOTON_ABRIR_CARRITO = document.getElementById("BOTON-ABRIR-CARRITO");

const FONDO_CARRITO = document.getElementById("FONDO-CARRITO");

const CERRAR_CARRITO = document.getElementById("CERRAR-CARRITO");

const LISTA_CARRITO = document.getElementById("LISTA-CARRITO");

const CONTADOR_CARRITO = document.getElementById("CONTADOR-CARRITO");

const TOTAL_CARRITO = document.getElementById("TOTAL-CARRITO");

const BOTON_FINALIZAR_COMPRA = document.getElementById(
  "BOTON-FINALIZAR-COMPRA",
);

/* CONVERTIR PRECIO A NUMERO */

function OBTENER_PRECIO(PRECIO) {
  return Number(PRECIO.replace("$", "").replaceAll(".", ""));
}

/* AGREGAR PRODUCTO */

BOTON_CARRITO.addEventListener("click", () => {
  if (!PRODUCTO_SELECCIONADO) {
    return;
  }

  const TALLE = SELECTOR_TALLE.value;

  const COLOR = SELECTOR_COLOR.value;

  if (PRODUCTO_SELECCIONADO.tieneTalle && TALLE === "") {
    MENSAJE_CARRITO.textContent = "SELECCIONÁ UN TALLE.";

    return;
  }

  if (COLOR === "") {
    MENSAJE_CARRITO.textContent = "SELECCIONÁ UN COLOR.";

    return;
  }

  const PRODUCTO_EXISTENTE = CARRITO.find((ITEM) => {
    return (
      ITEM.nombre === PRODUCTO_SELECCIONADO.nombre &&
      ITEM.talle === TALLE &&
      ITEM.color === COLOR
    );
  });

  if (PRODUCTO_EXISTENTE) {
    PRODUCTO_EXISTENTE.cantidad++;
  } else {
    CARRITO.push({
      nombre: PRODUCTO_SELECCIONADO.nombre,

      precio: OBTENER_PRECIO(PRODUCTO_SELECCIONADO.precio),

      imagen: PRODUCTO_SELECCIONADO.imagen,

      talle: TALLE,

      color: COLOR,

      cantidad: 1,
    });
  }

  ACTUALIZAR_CARRITO();

  MENSAJE_CARRITO.textContent = "¡PRODUCTO AGREGADO CORRECTAMENTE!";
});

/* =========================================
   ACTUALIZAR CARRITO
========================================= */
// ACTUALIZAR CARRITO

function ACTUALIZAR_CARRITO() {
  LISTA_CARRITO.innerHTML = "";

  let TOTAL_GENERAL = 0;
  let CANTIDAD_TOTAL = 0;

  // VERIFICAR SI EL CARRITO ESTA VACIO

  if (CARRITO.length === 0) {
    LISTA_CARRITO.innerHTML = `
            <p class="CARRITO-VACIO">
                TU CARRITO ESTÁ VACÍO
            </p>
        `;
  }

  // RECORRER LOS PRODUCTOS

  CARRITO.forEach((PRODUCTO, INDICE) => {
    const SUBTOTAL = PRODUCTO.precio * PRODUCTO.cantidad;

    TOTAL_GENERAL += SUBTOTAL;

    CANTIDAD_TOTAL += PRODUCTO.cantidad;

    // CREAR TARJETA DEL CARRITO

    const TARJETA_CARRITO = document.createElement("div");

    TARJETA_CARRITO.classList.add("PRODUCTO-CARRITO");

    TARJETA_CARRITO.innerHTML = `

            <img src="${PRODUCTO.imagen}" alt="${PRODUCTO.nombre}">

            <div class="DATOS-CARRITO">

                <h3>${PRODUCTO.nombre}</h3>

                <p>Precio: $${PRODUCTO.precio.toLocaleString("es-AR")}</p>

                ${PRODUCTO.talle ? `<p>Talle: ${PRODUCTO.talle}</p>` : ""}

                <p>Color: ${PRODUCTO.color}</p>

                <p>
                    Subtotal:
                    <strong>$${SUBTOTAL.toLocaleString("es-AR")}</strong>
                </p>


                <!-- CONTROLES DE CANTIDAD -->

                <div class="CONTROLES-CANTIDAD">

                    <button
                        type="button"
                        data-accion="DISMINUIR"
                        data-indice="${INDICE}">
                        −
                    </button>

                    <span>${PRODUCTO.cantidad}</span>

                    <button
                        type="button"
                        data-accion="AUMENTAR"
                        data-indice="${INDICE}">
                        +
                    </button>

                </div>


                <!-- ELIMINAR PRODUCTO -->

                <button
                    class="BOTON-ELIMINAR"
                    data-accion="ELIMINAR"
                    data-indice="${INDICE}">

                    ELIMINAR

                </button>

            </div>

        `;

    LISTA_CARRITO.appendChild(TARJETA_CARRITO);
  });

  // ACTUALIZAR CONTADOR Y TOTAL

  CONTADOR_CARRITO.textContent = CANTIDAD_TOTAL;

  TOTAL_CARRITO.textContent = "$" + TOTAL_GENERAL.toLocaleString("es-AR");
}

/* =========================================
   ELIMINAR PRODUCTOS
========================================= */

// CONTROLES DEL CARRITO

LISTA_CARRITO.addEventListener("click", (EVENTO) => {
  const BOTON = EVENTO.target.closest("[data-accion]");

  if (!BOTON) return;

  const ACCION = BOTON.dataset.accion;

  const INDICE = Number(BOTON.dataset.indice);

  // VERIFICAR QUE EL PRODUCTO EXISTA

  if (!CARRITO[INDICE]) return;

  // AUMENTAR CANTIDAD

  if (ACCION === "AUMENTAR") {
    CARRITO[INDICE].cantidad++;
  }

  // DISMINUIR CANTIDAD

  if (ACCION === "DISMINUIR") {
    CARRITO[INDICE].cantidad--;

    if (CARRITO[INDICE].cantidad <= 0) {
      CARRITO.splice(INDICE, 1);
    }
  }

  // ELIMINAR PRODUCTO

  if (ACCION === "ELIMINAR") {
    CARRITO.splice(INDICE, 1);
  }

  // ACTUALIZAR INFORMACION

  ACTUALIZAR_CARRITO();
});

/* =========================================
   ABRIR Y CERRAR CARRITO
========================================= */

BOTON_ABRIR_CARRITO.addEventListener("click", () => {
  FONDO_CARRITO.classList.add("ACTIVO");
});

CERRAR_CARRITO.addEventListener("click", () => {
  FONDO_CARRITO.classList.remove("ACTIVO");
});

FONDO_CARRITO.addEventListener("click", (EVENTO) => {
  if (EVENTO.target === FONDO_CARRITO) {
    FONDO_CARRITO.classList.remove("ACTIVO");
  }
});

/* =========================================
   FINALIZAR COMPRA
========================================= */

BOTON_FINALIZAR_COMPRA.addEventListener("click", () => {
  if (CARRITO.length === 0) {
    alert("TU CARRITO ESTÁ VACÍO.");

    return;
  }

  alert("¡TU PEDIDO ESTÁ LISTO PARA CONTINUAR!");
});

// BUSCADOR DE PRODUCTOS

// BUSCADOR Y FILTRO DE PRODUCTOS

const BUSCADOR_PRODUCTOS = document.getElementById("BUSCADOR-PRODUCTOS");

const BOTON_BUSCAR = document.getElementById("BOTON-BUSCAR");

const FILTRAR_CATEGORIA = document.getElementById("FILTRAR-CATEGORIA");

const TARJETAS_PRODUCTOS = document.querySelectorAll(".TARJETA-PRODUCTO");

// MENSAJES SIN RESULTADOS

const MENSAJE_INDUMENTARIA = document.getElementById(
  "SIN-RESULTADOS-INDUMENTARIA",
);

const MENSAJE_ACCESORIOS = document.getElementById("SIN-RESULTADOS-ACCESORIOS");

// FUNCION PRINCIPAL

function BUSCAR_PRODUCTOS() {
  const TEXTO_BUSCADO = BUSCADOR_PRODUCTOS.value.trim().toLowerCase();

  const CATEGORIA_SELECCIONADA = FILTRAR_CATEGORIA.value;

  let PRODUCTOS_INDUMENTARIA = 0;
  let PRODUCTOS_ACCESORIOS = 0;

  TARJETAS_PRODUCTOS.forEach((TARJETA) => {
    const NOMBRE_PRODUCTO = TARJETA.textContent.toLowerCase();

    const IDENTIFICADOR_PRODUCTO = TARJETA.dataset.producto.toLowerCase();

    const ES_INDUMENTARIA = [
      "remera",
      "musculosa",
      "short",
      "pantalon",
    ].includes(TARJETA.dataset.producto);

    const ES_ACCESORIO = ["guantes", "straps", "cinturon", "shaker"].includes(
      TARJETA.dataset.producto,
    );

    const COINCIDE_BUSQUEDA =
      NOMBRE_PRODUCTO.includes(TEXTO_BUSCADO) ||
      IDENTIFICADOR_PRODUCTO.includes(TEXTO_BUSCADO);

    const COINCIDE_CATEGORIA =
      CATEGORIA_SELECCIONADA === "TODOS" ||
      (CATEGORIA_SELECCIONADA === "INDUMENTARIA" && ES_INDUMENTARIA) ||
      (CATEGORIA_SELECCIONADA === "ACCESORIOS" && ES_ACCESORIO);

    const MOSTRAR_PRODUCTO = COINCIDE_BUSQUEDA && COINCIDE_CATEGORIA;

    TARJETA.style.display = MOSTRAR_PRODUCTO ? "" : "none";

    if (MOSTRAR_PRODUCTO && ES_INDUMENTARIA) {
      PRODUCTOS_INDUMENTARIA++;
    }

    if (MOSTRAR_PRODUCTO && ES_ACCESORIO) {
      PRODUCTOS_ACCESORIOS++;
    }
  });

  // MENSAJES DE RESULTADOS

  MENSAJE_INDUMENTARIA.style.display =
    CATEGORIA_SELECCIONADA !== "ACCESORIOS" && PRODUCTOS_INDUMENTARIA === 0
      ? "block"
      : "none";

  MENSAJE_ACCESORIOS.style.display =
    CATEGORIA_SELECCIONADA !== "INDUMENTARIA" && PRODUCTOS_ACCESORIOS === 0
      ? "block"
      : "none";
}

// EVENTOS DEL BUSCADOR

BUSCADOR_PRODUCTOS.addEventListener("input", BUSCAR_PRODUCTOS);

BOTON_BUSCAR.addEventListener("click", BUSCAR_PRODUCTOS);

// EVENTO DEL FILTRO

FILTRAR_CATEGORIA.addEventListener("change", BUSCAR_PRODUCTOS);

// LIMPIAR CON ESCAPE

BUSCADOR_PRODUCTOS.addEventListener("keydown", (EVENTO) => {
  if (EVENTO.key === "Escape") {
    BUSCADOR_PRODUCTOS.value = "";

    BUSCAR_PRODUCTOS();
  }
});

// ORDENAMIENTO DE PRODUCTOS

const ORDENAR_PRODUCTOS = document.getElementById("ORDENAR-PRODUCTOS");

// CONTENEDORES DE CADA CATEGORIA

const CONTENEDORES_PRODUCTOS = document.querySelectorAll(
  ".CONTENEDOR-PRODUCTOS",
);

// GUARDAR EL ORDEN ORIGINAL DE LOS PRODUCTOS

const ORDEN_ORIGINAL = [];

CONTENEDORES_PRODUCTOS.forEach((CONTENEDOR) => {
  ORDEN_ORIGINAL.push({
    contenedor: CONTENEDOR,
    productos: Array.from(CONTENEDOR.children),
  });
});

// OBTENER EL PRECIO NUMERICO

function OBTENER_PRECIO_PRODUCTO(TARJETA) {
  const TEXTO_PRECIO = TARJETA.querySelector(".PRECIO-PRODUCTO").textContent;

  return Number(TEXTO_PRECIO.replace(/[^0-9]/g, ""));
}

// ORDENAR PRODUCTOS

function ORDENAR_LISTA_PRODUCTOS() {
  const ORDEN = ORDENAR_PRODUCTOS.value;

  ORDEN_ORIGINAL.forEach((GRUPO) => {
    let PRODUCTOS = [...GRUPO.productos];

    if (ORDEN === "MENOR-PRECIO") {
      PRODUCTOS.sort((A, B) => {
        return OBTENER_PRECIO_PRODUCTO(A) - OBTENER_PRECIO_PRODUCTO(B);
      });
    } else if (ORDEN === "MAYOR-PRECIO") {
      PRODUCTOS.sort((A, B) => {
        return OBTENER_PRECIO_PRODUCTO(B) - OBTENER_PRECIO_PRODUCTO(A);
      });
    } else {
      PRODUCTOS = [...GRUPO.productos];
    }

    PRODUCTOS.forEach((PRODUCTO) => {
      GRUPO.contenedor.appendChild(PRODUCTO);
    });
  });
}

// ACTIVAR ORDENAMIENTO

ORDENAR_PRODUCTOS.addEventListener("change", ORDENAR_LISTA_PRODUCTOS);
