const miniaturas = document.querySelectorAll(".miniatura");
const lightbox = document.getElementById("lightbox");
const imgLightbox = document.getElementById("imagen-lightbox");

const btnCerrar = document.getElementById("cerrar");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

let indexActual = 0;

// Abrir
miniaturas.forEach((img, index) => {
  img.addEventListener("click", () => {
    indexActual = index;
    mostrarImagen();
    lightbox.classList.add("mostrar");
  });
});

function mostrarImagen() {
  imgLightbox.src = miniaturas[indexActual].src;
}

// Flechas
btnPrev.addEventListener("click", () => {
  indexActual = (indexActual - 1 + miniaturas.length) % miniaturas.length;
  mostrarImagen();
});

btnNext.addEventListener("click", () => {
  indexActual = (indexActual + 1) % miniaturas.length;
  mostrarImagen();
});

// Cerrar
btnCerrar.addEventListener("click", () => {
  lightbox.classList.remove("mostrar");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("mostrar");
  }
});
