// index.js
const texto = document.getElementById('bienvenida');

setInterval(() => {
  if (texto.classList.contains('animate__fadeIn')) {
    texto.classList.replace('animate__fadeIn', 'animate__fadeOut');
  } else {
    texto.classList.replace('animate__fadeOut', 'animate__fadeIn');
  }
}, 3000); // cada 3 segundos

volarDragon();
