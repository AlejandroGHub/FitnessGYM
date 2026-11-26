const IMAGENES = document.querySelectorAll(".IMAGEN-PORTADA");

let IMAGEN_ACTUAL = 0;

const TIEMPO_CAMBIO = 6000;

if (IMAGENES.length > 1) {
  setInterval(() => {
    IMAGENES[IMAGEN_ACTUAL].classList.remove("ACTIVA");

    IMAGEN_ACTUAL = (IMAGEN_ACTUAL + 1) % IMAGENES.length;

    IMAGENES[IMAGEN_ACTUAL].classList.add("ACTIVA");
  }, TIEMPO_CAMBIO);
}
