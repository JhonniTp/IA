var pasadoBtn = document.getElementById("pasado");
var presenteBtn = document.getElementById("presente");
var futuroBtn = document.getElementById("futuro");
var chisteBtn = document.getElementById("chiste");
var videoContainer = document.getElementById("video-container");
var video = document.getElementById("video");
var videoReproducido = false;

pasadoBtn.addEventListener("click", function() {
  reproducirVideo("./video/WhatsApp Video 2023-02-17 at 6.34.48 PM.mp4", "./pasado.html");
});

presenteBtn.addEventListener("click", function() {
  reproducirVideo("./video/WhatsApp Video 2023-02-17 at 6.34.48 PM.mp4", "./presente.html");
});

futuroBtn.addEventListener("click", function() {
  reproducirVideo("./video/WhatsApp Video 2023-02-17 at 6.34.48 PM.mp4", "./futuro.html");
});

chisteBtn.addEventListener("click", function(){
  reproducirVideo("./video/WhatsApp Video 2023-02-17 at 6.34.48 PM.mp4", "./minijuegos.html");
})

video.addEventListener("ended", function() {
  window.location.href = video.dataset.redirectUrl;
});

function reproducirVideo(src, redirectUrl) {
  video.src = src;
  video.dataset.redirectUrl = redirectUrl;
  mostrarVideo();
}

function mostrarVideo() {
  videoContainer.style.display = "block";
  video.play();
  videoReproducido = true;
  pasadoBtn.disabled = true;
  presenteBtn.disabled = true;
  futuroBtn.disabled = true;
}
