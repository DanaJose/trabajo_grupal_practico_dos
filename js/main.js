// =========================================================
// main.js: funciones comunes a todas las páginas
// =========================================================

// ---------- 1. Marcar la página activa en el menú ----------
const pagina = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navbar a[href]").forEach(enlace => {
  if (enlace.getAttribute("href").split("#")[0] === pagina) {
    enlace.classList.add("active");
    const menu = enlace.closest(".dropdown");
    if (menu) menu.querySelector(".dropdown-toggle").classList.add("active");
  }
});

// ---------- 2. Video de fondo de la portada ----------
const video = document.querySelector(".hero-video");
const botonVideo = document.getElementById("btnVideo");

if (video && botonVideo) {
  // Si la persona pidió menos movimiento en su sistema, arranca pausado
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    video.pause();
    botonVideo.textContent = "Reproducir video";
  }

  botonVideo.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      botonVideo.textContent = "Pausar video";
    } else {
      video.pause();
      botonVideo.textContent = "Reproducir video";
    }
  });
}
