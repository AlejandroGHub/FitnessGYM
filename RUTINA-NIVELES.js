// ==========================================
// MENÚ DESPLEGABLE
// ==========================================

const BOTON_MENU = document.querySelector("#BOTON-MENU");
const MENU_DESPLEGABLE = document.querySelector("#MENU-DESPLEGABLE");

if (BOTON_MENU && MENU_DESPLEGABLE) {
  BOTON_MENU.addEventListener("click", () => {
    MENU_DESPLEGABLE.classList.toggle("ACTIVO");
  });
}

// ==========================================
// SELECCIÓN DE NIVELES
// ==========================================

const BOTONES_NIVEL = document.querySelectorAll(".BOTON-NIVEL");
const INFORMACION_NIVELES = document.querySelectorAll(".INFORMACION-NIVEL");

BOTONES_NIVEL.forEach((BOTON) => {
  BOTON.addEventListener("click", () => {
    const NIVEL_SELECCIONADO = BOTON.dataset.nivel;

    // Ocultar todos los niveles
    INFORMACION_NIVELES.forEach((SECCION) => {
      SECCION.classList.remove("ACTIVO");
    });

    // Mostrar el nivel seleccionado
    const NIVEL_ACTIVO = document.getElementById(NIVEL_SELECCIONADO);

    if (NIVEL_ACTIVO) {
      NIVEL_ACTIVO.classList.add("ACTIVO");

      NIVEL_ACTIVO.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ==========================================
// DESPLEGAR DÍAS DE ENTRENAMIENTO
// ==========================================

const BOTONES_DIA = document.querySelectorAll(".BOTON-DIA");

BOTONES_DIA.forEach((BOTON) => {
  BOTON.addEventListener("click", () => {
    const DIA_RUTINA = BOTON.parentElement;

    DIA_RUTINA.classList.toggle("ACTIVO");
  });
});
