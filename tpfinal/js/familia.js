// Seleccionamos todas las tarjetas de familia
const familyCards = document.querySelectorAll(".family-card");

// Recorremos cada tarjeta
familyCards.forEach(card => {
    card.addEventListener("click", () => {

        // Si ya está activa, la cierra
        if (card.classList.contains("activo")) {
            card.classList.remove("activo");
            return;
        }

        // Cierra cualquier otra tarjeta activa
        familyCards.forEach(c => c.classList.remove("activo"));

        // Activa esta tarjeta
        card.classList.add("activo");
    });
});
