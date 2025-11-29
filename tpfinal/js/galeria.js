document.addEventListener("DOMContentLoaded", () => {
  const miniaturas = document.querySelectorAll(".miniatura");
  const lightbox = document.getElementById("lightbox");
  const imgLightbox = document.getElementById("imagen-lightbox");
  const btnCerrar = document.getElementById("cerrar");
  const btnPrev = document.getElementById("prev");
  const btnNext = document.getElementById("next");

  let indiceActual = 0;

  // Abrir lightbox
  miniaturas.forEach((img, index) => {
    img.addEventListener("click", () => {
      indiceActual = index;
      mostrarImagen();
      lightbox.classList.remove("oculto");
    });
  });

  // Mostrar imagen según índice
  function mostrarImagen() {
    imgLightbox.src = miniaturas[indiceActual].src;
  }

  // Flecha izquierda
  btnPrev.addEventListener("click", () => {
    indiceActual = (indiceActual - 1 + miniaturas.length) % miniaturas.length;
    mostrarImagen();
  });

  // Flecha derecha
  btnNext.addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % miniaturas.length;
    mostrarImagen();
  });

  // Cerrar lightbox
  btnCerrar.addEventListener("click", () => {
    lightbox.classList.add("oculto");
  });

  // Cerrar tocando afuera
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add("oculto");
    }
  });
});
