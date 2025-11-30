// Seleccionamos todos los bloques de ex miembros
const miembros = document.querySelectorAll(".miembro");

miembros.forEach(miembro => {
    const imagen = miembro.querySelector("img");
    const titulo = miembro.querySelector("h2");
    const info = miembro.querySelector(".info");

    // Ocultar la info por defecto
    info.style.maxHeight = "0px";
    info.style.overflow = "hidden";
    info.style.transition = "max-height 0.4s ease";

    // Función para abrir/cerrar
    function toggleInfo() {
        if (info.style.maxHeight === "0px") {
            info.style.maxHeight = info.scrollHeight + "px";
        } else {
            info.style.maxHeight = "0px";
        }
    }

    // Click en la imagen o en el nombre
    imagen.addEventListener("click", toggleInfo);
    titulo.addEventListener("click", toggleInfo);
});
