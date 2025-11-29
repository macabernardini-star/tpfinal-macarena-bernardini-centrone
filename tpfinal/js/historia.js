// historia.js
// Reproduce audio MP3 si existe; si no, usa SpeechSynthesis (voz del navegador).
// Maneja play / pause / estado y fallback robusto.

document.getElementById("menu-btn").addEventListener("click", () => {
  const menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
});

// historia.js
// Reproduce audio MP3 si existe; si no, usa SpeechSynthesis (voz del navegador).
// Maneja play / pause / estado y fallback robusto.

const btnPlay = document.getElementById('btn-voz');
const btnPause = document.getElementById('btn-pause');
const statusBox = document.getElementById('status');
const audio = document.getElementById('audio-historia');
const textoNodo = document.getElementById('texto-audio');

let usingAudioFile = false;
let synthUtterance = null;
let isPlaying = false;

// Texto a leer (se extrae del DOM para evitar duplicar)
function getTextoCompleto() {
  // concatenamos todos los párrafos del bloque
  const ps = Array.from(textoNodo.querySelectorAll('p'));
  return ps.map(p => p.textContent.trim()).join(' ');
}

// Chequea si el archivo de audio existe: intenta cargar metadata
function checkAudioExists(elem) {
  return new Promise((resolve) => {
    // Si no tiene source, asumimos que no existe.
    const src = elem.querySelector('source')?.src;
    if (!src) return resolve(false);

    // Intentamos cargar metadata con fetch HEAD si el navegador lo permite
    // (Si CORS bloquea, asumimos que el archivo está disponible localmente en tu servidor).
    fetch(src, { method: 'HEAD' }).then(res => {
      resolve(res.ok);
    }).catch(() => {
      // Si fetch falla (CORS/host), asumimos que el archivo existe (común en servidores locales).
      resolve(true);
    });
  });
}

// Play usando archivo de audio
async function playAudioFile() {
  try {
    audio.currentTime = 0;
    await audio.play();
    usingAudioFile = true;
    isPlaying = true;
    statusBox.textContent = 'Reproduciendo audio...';
    btnPlay.hidden = true;
    btnPause.hidden = false;
  } catch (err) {
    console.warn('No se pudo reproducir el archivo de audio:', err);
    // fallback a TTS
    playTTS();
  }
}

// Pausa audio file
function pauseAudioFile() {
  audio.pause();
  isPlaying = false;
  statusBox.textContent = 'Pausado';
  btnPlay.hidden = false;
  btnPause.hidden = true;
}

// Play usando SpeechSynthesis (TTS del navegador)
function playTTS() {
  const texto = getTextoCompleto();
  if (!texto) return;

  // Cancelar cualquier síntesis previa
  window.speechSynthesis.cancel();

  synthUtterance = new SpeechSynthesisUtterance(texto);

  // Preferencias de voz/entonación para voz femenina dulce
  synthUtterance.rate = 1.0;      // velocidad (0.8 - 1.1 recomendado)
  synthUtterance.pitch = 1.15;    // pitch para sonido más juvenil/dulce
  synthUtterance.volume = 1.0;

  // Intentar seleccionar una voz femenina
  const voices = window.speechSynthesis.getVoices();
  let chosen = null;
  if (voices && voices.length) {
    // preferimos voces que contengan "female", "woman", "girl", "feminine" o nombres conocidos
    chosen = voices.find(v =>
      /female|woman|girl|feminine|female/i.test(v.name) ||
      /female|woman|girl|feminine/i.test(v.lang)
    ) || voices.find(v => /es/i.test(v.lang)) || voices[0];
  }

  if (chosen) synthUtterance.voice = chosen;

  synthUtterance.onstart = () => {
    isPlaying = true;
    statusBox.textContent = 'Narración por voz del navegador...';
    btnPlay.hidden = true;
    btnPause.hidden = false;
  };

  synthUtterance.onend = () => {
    isPlaying = false;
    statusBox.textContent = 'Reproducción finalizada';
    btnPlay.hidden = false;
    btnPause.hidden = true;
  };

  synthUtterance.onerror = (e) => {
    console.error('SpeechSynthesis error:', e);
    isPlaying = false;
    statusBox.textContent = 'Error en la síntesis de voz';
    btnPlay.hidden = false;
    btnPause.hidden = true;
  };

  window.speechSynthesis.speak(synthUtterance);
}

// Pause TTS
function pauseTTS() {
  window.speechSynthesis.pause();
  isPlaying = false;
  statusBox.textContent = 'Narración pausada';
  btnPlay.hidden = false;
  btnPause.hidden = true;
}

// Stop any playback
function stopAny() {
  if (usingAudioFile) {
    audio.pause();
  } else {
    window.speechSynthesis.cancel();
  }
  isPlaying = false;
  btnPlay.hidden = false;
  btnPause.hidden = true;
}

// Evento principal del botón Play
btnPlay.addEventListener('click', async () => {
  statusBox.textContent = 'Comprobando audio...';
  const exists = await checkAudioExists(audio);

  if (exists) {
    // reproducir archivo
    playAudioFile();
  } else {
    // fallback a TTS
    playTTS();
  }
});

// Pausar
btnPause.addEventListener('click', () => {
  if (usingAudioFile) {
    pauseAudioFile();
  } else {
    pauseTTS();
  }
});

// Si el audio mp3 finaliza (evento)
audio.addEventListener('ended', () => {
  isPlaying = false;
  statusBox.textContent = 'Reproducción finalizada';
  btnPlay.hidden = false;
  btnPause.hidden = true;
});

// Si el usuario cambia pestaña, pausamos para no seguir hablando de fondo
document.addEventListener('visibilitychange', () => {
  if (document.hidden && isPlaying) {
    // pausamos
    if (usingAudioFile) audio.pause();
    else window.speechSynthesis.pause();
    statusBox.textContent = 'Pausado (pestaña en segundo plano)';
    btnPlay.hidden = false;
    btnPause.hidden = true;
  }
});

// Carga de voces (algunas plataformas requieren user gesture)
window.speechSynthesis.onvoiceschanged = () => {
  // no hace falta lógica extra ahora, la voz se selecciona en playTTS()
};
