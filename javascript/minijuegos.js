function mostrarCaja(chiste) {
    if (chiste == '') {
        alert('Por favor, escribe un chiste primero.');
        return;
    }

    var caja = document.getElementById("carga");
    caja.style.display = "none";
}

$(document).ready(function() {
    $('#enviar').click(function() {
        var chiste = $('#chiste').val();
        if (chiste == '') {
            alert('Por favor, escribe un chiste primero.');
            return;
        }
        // Deshabilitar el botón Enviar
        $(this).prop('disabled', true);
        // Mostrar la caja de carga
        $('#carga').show();
        // Simular una carga de 5 segundos
        var progress = 0;
        var intervalId = setInterval(function() {
            progress += 20;
            var percentage = progress + '%';
            $('#progress-bar').width(percentage);
            $('#progress-percentage').text(percentage);
            if (progress == 120) {
                // Detener la simulación de carga
                clearInterval(intervalId);
                // Ocultar la caja de carga
                $('#carga').hide();
                // Reproducir un video aleatorio
                var videos = ['/video/chiste1.mp4', '/video/llamadacirco.mp4', '/video/ranariendo.mp4', '/video/chiste3.mp4', '/video/chiste4.mp4','/video/chiste5.mp4','/video/chiste6.mp4','/video/chiste7.mp4'];
                var randomIndex = Math.floor(Math.random() * videos.length);
                var videoUrl = videos[randomIndex];
                $('#video source').attr('src', videoUrl);
                $('#video')[0].load();
                // Mostrar el video superpuesto
                $('#video-overlay').show();
                // Iniciar la reproducción del video
                $('#video')[0].play();
            }
        }, 1000);
    });

    // Detectar el final de la reproducción del video
    $('#video').on('ended', function() {
        // Reiniciar la barra de progreso
        $('#progress-bar').width('0%');
        $('#progress-percentage').text('0%');
        // Ocultar el video superpuesto
        $('#video-overlay').hide();
        // Habilitar el botón Enviar
        $('#enviar').prop('disabled', false);
    });
});

function toggleBoton() {
    var boton = document.getElementById("enviar");
    boton.classList.toggle("presionado");
    boton.disabled = true;
}

//AUDIO
const miBoton = document.querySelector('#miBoton');
const miAudio = document.querySelector('#miAudio');

miBoton.addEventListener('click', () => {
    miBoton.classList.add('detenido');
    miBoton.style.animationPlayState = 'paused';
    miAudio.play();
});

miAudio.addEventListener('ended', () => {
    miBoton.classList.remove('detenido');
    miBoton.style.animationPlayState = 'running';
});

