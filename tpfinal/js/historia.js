document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio-historia");
  const btnPlay = document.getElementById("btn-voz");
  const btnPause = document.getElementById("btn-pause");
  const status = document.getElementById("status");

  // ▶ PLAY — continúa desde donde quedó
  btnPlay.addEventListener("click", () => {
    audio.play();
    btnPause.hidden = false;
    btnPlay.hidden = true;
    status.textContent = "Reproduciendo...";
  });

  // ⏸ PAUSAR — guarda la posición automáticamente
  btnPause.addEventListener("click", () => {
    audio.pause();
    btnPause.hidden = true;
    btnPlay.hidden = false;
    status.textContent = "Pausado";
  });

  // Cuando termina el audio
  audio.addEventListener("ended", () => {
    btnPause.hidden = true;
    btnPlay.hidden = false;
    status.textContent = "Reproducción finalizada.";
  });
});
