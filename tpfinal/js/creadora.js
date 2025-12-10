// Efecto suave al hacer scroll
window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card-creadora");

    cards.forEach(card => {
        const pos = card.getBoundingClientRect().top;
        if (pos < window.innerHeight - 80) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
