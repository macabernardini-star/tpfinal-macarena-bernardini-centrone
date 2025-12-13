document.querySelectorAll(".dato").forEach(dato => {
    dato.addEventListener("click", () => {
        dato.classList.toggle("abierto");
    });
});
