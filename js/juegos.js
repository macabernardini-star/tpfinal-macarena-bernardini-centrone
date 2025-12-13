
const preguntas = [
    {
        pregunta: "¿Quién es el cantante principal de Imagine Dragons?",
        opciones: ["Dan Reynolds", "Ben McKee", "Andrew Tolman"],
        correcta: 0
    },
    {
        pregunta: "¿En qué año se formó la banda?",
        opciones: ["2005", "2008", "2011"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál de estos NO es un disco de Imagine Dragons?",
        opciones: ["Origins", "Evolve", "Future Nostalgia"],
        correcta: 2
    },
    {
        pregunta: "Verdadero o Falso: 'Radioactive' es una de sus canciones más famosas.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        pregunta: "¿Qué integrante toca el bajo?",
        opciones: ["Ben McKee", "Wayne Sermon", "Dan Reynolds"],
        correcta: 0
    },
    {
        pregunta: "¿A qué álbum pertenece esta portada?",
        imagen: "img/album-1.jpg",
        opciones: ["Night Visions", "Mercury Act 1", "Origins"],
        correcta: 0
    },
    {
        pregunta: "¿Qué canción NO es de Imagine Dragons?",
        opciones: ["Believer", "Demons", "Blinding Lights"],
        correcta: 2
    },
    {
        pregunta: "Verdadero o Falso: La banda es originaria de Las Vegas.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    }
];

let indice = 0;
let nombreUsuario = "";
let puntaje = 0;

const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaJuego = document.getElementById("pantalla-juego");
const pantallaFinal = document.getElementById("pantalla-final");

const preguntaHTML = document.getElementById("pregunta");
const opcionesHTML = document.getElementById("opciones");
const imagenPregunta = document.getElementById("imagen-pregunta");

document.getElementById("btn-empezar").onclick = () => {
    nombreUsuario = document.getElementById("nombre").value;

    if (nombreUsuario === "") {
        alert("Ingresá tu nombre 😄");
        return;
    }

    pantallaInicio.classList.add("oculto");
    pantallaJuego.classList.remove("oculto");

    cargarPregunta();
};

function cargarPregunta() {
    const actual = preguntas[indice];

    preguntaHTML.textContent = actual.pregunta;

    if (actual.imagen) {
        imagenPregunta.src = actual.imagen;
        imagenPregunta.classList.remove("oculto");
    } else {
        imagenPregunta.classList.add("oculto");
    }

    opcionesHTML.innerHTML = "";

    actual.opciones.forEach((op, i) => {
        const boton = document.createElement("div");
        boton.classList.add("opcion");
        boton.textContent = op;

        boton.onclick = () => {
            if (i === actual.correcta) puntaje++;
            siguientePregunta();
        };

        opcionesHTML.appendChild(boton);
    });
}

function siguientePregunta() {
    indice++;

    if (indice >= preguntas.length) {
        finalizarJuego();
    } else {
        cargarPregunta();
    }
}

function finalizarJuego() {
    pantallaJuego.classList.add("oculto");
    pantallaFinal.classList.remove("oculto");

    document.getElementById("resultado-final").textContent =
        `${nombreUsuario}, obtuviste ${puntaje} de ${preguntas.length} preguntas 🎉`;
}

document.getElementById("btn-reiniciar").onclick = () => {
    indice = 0;
    puntaje = 0;

    pantallaFinal.classList.add("oculto");
    pantallaInicio.classList.remove("oculto");
};
