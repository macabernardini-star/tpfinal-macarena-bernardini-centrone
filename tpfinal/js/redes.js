// Spotify – brillo verde
const spotify = document.getElementById("spotify");
spotify.addEventListener("mouseenter", () => {
    spotify.style.boxShadow = "0 0 20px #1DB954";
});
spotify.addEventListener("mouseleave", () => {
    spotify.style.boxShadow = "none";
});

// YouTube – vibración
const youtube = document.getElementById("youtube");
youtube.addEventListener("mouseenter", () => {
    youtube.style.transform = "translateX(2px)";
    youtube.style.animation = "shake 0.3s infinite";
});
youtube.addEventListener("mouseleave", () => {
    youtube.style.animation = "none";
    youtube.style.transform = "none";
});

// Instagram – zoom suave
const instagram = document.getElementById("instagram");
instagram.addEventListener("mouseenter", () => {
    instagram.querySelector("img").style.transform = "scale(1.2)";
});
instagram.addEventListener("mouseleave", () => {
    instagram.querySelector("img").style.transform = "scale(1)";
});

// X/Twitter – deslizar rápido
const twitter = document.getElementById("twitter");
twitter.addEventListener("mouseenter", () => {
    twitter.style.transform = "translateX(10px)";
});
twitter.addEventListener("mouseleave", () => {
    twitter.style.transform = "translateX(0)";
});

// Facebook – glow azul
const facebook = document.getElementById("facebook");
facebook.addEventListener("mouseenter", () => {
    facebook.style.boxShadow = "0 0 20px #1877F2";
});
facebook.addEventListener("mouseleave", () => {
    facebook.style.boxShadow = "none";
});

// TikTok – parpadeo multicolor
const tiktok = document.getElementById("tiktok");
tiktok.addEventListener("mouseenter", () => {
    tiktok.style.animation = "colors 1s infinite";
});
tiktok.addEventListener("mouseleave", () => {
    tiktok.style.animation = "none";
});
