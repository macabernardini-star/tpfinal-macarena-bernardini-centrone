const redes = document.querySelectorAll(".red");

setInterval(() => {
    let random = Math.floor(Math.random() * redes.length);
    redes[random].classList.add("shake");

    setTimeout(() => {
        redes[random].classList.remove("shake");
    }, 500);
}, 2500);
