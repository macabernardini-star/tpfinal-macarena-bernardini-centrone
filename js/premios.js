// Contadores animados con velocidad aleatoria
document.addEventListener("DOMContentLoaded", () => {
    const contadores = document.querySelectorAll(".contador");

    contadores.forEach(cont => {
        let valorFinal = parseInt(cont.getAttribute("data-valor"));
        let numeroElemento = cont.querySelector(".numero");

        let valorActual = 0;
        let velocidad = Math.floor(Math.random() * 40) + 10; // random entre 10 y 50 ms

        let intervalo = setInterval(() => {
            valorActual++;
            numeroElemento.textContent = valorActual;

            if (valorActual >= valorFinal) {
                clearInterval(intervalo);
            }
        }, velocidad);
    });
});
