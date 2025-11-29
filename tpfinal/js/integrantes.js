// Seleccionamos todas las cards de integrantes
const cards = document.querySelectorAll(".integrante-card");

// Creamos un Intersection Observer para animar cuando aparecen
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("animate__animated", "animate__fadeInUp");
      observer.unobserve(entry.target); // Para que no se repita la animación
    }
  });
}, {
  threshold: 0.3 // Se activa cuando el 30% del elemento es visible
});

// Observamos cada card
cards.forEach(card => observer.observe(card));
