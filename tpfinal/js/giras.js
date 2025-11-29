// Selecciona todas las cards
const cards = document.querySelectorAll(".card");

// Crea el observador
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__zoomIn");
      observer.unobserve(entry.target); // Evita que se repita
    }
  });
}, {
  threshold: 0.3 // Se activa cuando el 30% es visible
});

// Observa cada card
cards.forEach(card => observer.observe(card));
