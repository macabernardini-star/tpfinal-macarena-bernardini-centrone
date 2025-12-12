// ===== EFECTO DE TIPEO =====
const texto = "Hola, soy la creadora";
let i = 0;
function typeWriter() {
    if (i < texto.length) {
        document.getElementById("texto-creadora").textContent += texto.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}
window.addEventListener("load", typeWriter);


// ===== ANIMACIÓN FADE-IN DE LA FOTO =====
window.addEventListener("load", () => {
    const foto = document.querySelector(".creadora-foto");
    foto.classList.add("mostrar");
});


// ===== PARTÍCULAS DEL FONDO =====
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = "rgba(255,0,0,0.7)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

