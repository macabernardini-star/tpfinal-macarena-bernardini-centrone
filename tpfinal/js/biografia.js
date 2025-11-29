// Animación del título
gsap.from("#bio-titulo", { 
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "bounce.out"
});

// Animación del texto
gsap.from("#bio-texto", {
  duration: 1.5,
  x: -100,
  opacity: 0,
  delay: 0.5,
  ease: "power2.out"
});

// Animación de la imagen
gsap.from("#bio-imagen", {
  duration: 1.5,
  x: 100,
  opacity: 0,
  delay: 0.7,
  ease: "power2.out"
});
