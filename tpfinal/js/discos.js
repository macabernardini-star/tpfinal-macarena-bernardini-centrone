document.addEventListener("DOMContentLoaded", () => {

    // Paleta de colores intensos
    const colores = [
        "#ff004c", "#ff7b00", "#ffee00",
        "#00eaff", "#0099ff", "#c300ff",
        "#ff00e6", "#00ff73"
    ];

    function crearEstrella(x, y, color) {
        const estrella = document.createElement("div");
        estrella.classList.add("estrella");
        estrella.style.left = x + "px";
        estrella.style.top = y + "px";
        estrella.style.background = color;

        document.body.appendChild(estrella);

        // Animación del destello inicial
        estrella.animate(
            [
                { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
                { transform: "translate(-50%, -50%) scale(1.8)", opacity: 0 }
            ],
            {
                duration: 400,
                easing: "ease-out"
            }
        );

        setTimeout(() => estrella.remove(), 450);
    }

    function fireworkEstrella(x, y) {

        // DESTELLO CENTRAL
        crearEstrella(x, y, colores[Math.floor(Math.random() * colores.length)]);

        // EXPLOSIÓN DE ESTRELLAS
        const cantidad = Math.random() * 40 + 40; // 40-80 partículas

        for (let i = 0; i < cantidad; i++) {
            const p = document.createElement("div");
            p.classList.add("firework-star");

            // Color random
            p.style.background = colores[Math.floor(Math.random() * colores.length)];

            // Tamaño random
            const size = Math.random() * 8 + 4;
            p.style.width = size + "px";
            p.style.height = size + "px";

            document.body.appendChild(p);

            // Ángulo y distancia
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 170 + 60;

            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;

            const duracion = Math.random() * 700 + 600;

            p.style.left = x + "px";
            p.style.top = y + "px";

            p.animate(
                [
                    { transform: "translate(0,0) scale(1)", opacity: 1 },
                    { transform: `translate(${dx}px, ${dy}px) scale(0.3)`, opacity: 0 }
                ],
                {
                    duration: duracion,
                    easing: "ease-out"
                }
            );

            setTimeout(() => p.remove(), duracion + 100);
        }
    }

    // Activar en las tarjetas
    const discos = document.querySelectorAll(".disco-card");
    discos.forEach(disco => {
        disco.addEventListener("click", (e) => {
            fireworkEstrella(e.clientX, e.clientY);
        });
    });

});
