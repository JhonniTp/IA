let enviar = document.getElementById('enviar');
let respuesta = document.getElementById('result');
let respuesta2 = document.getElementById('result2');

enviar.addEventListener('click', function() {
    let edad = document.getElementById('edad').value.trim();
    if (edad.match(/\D/)) {
        respuesta.innerHTML = 'Solo números pedazo de bestia retrasada';
        respuesta2.innerHTML = '🤡';
    }
    else if (isNaN(parseInt(edad))) {
        respuesta.innerHTML = 'Oe csm ingresa números';
        respuesta2.innerHTML = `no me quieras ver la cara de estúpido 🤡`;
    }
    else {
        respuesta.innerHTML = `Dentro de 5 años tendrás ${parseInt(edad) + 5} años.`;
        respuesta2.innerHTML = `🔥Modo para pobres🔥`;
    }
});

