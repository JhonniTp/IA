let enviar = document.getElementById('enviar');
let respuesta = document.getElementById('result');
let respuesta2 = document.getElementById('result2');

enviar.addEventListener('click', function() {
    let edad = document.getElementById('edad').value.trim();
    if (edad.match(/\D/)) {
        respuesta.innerHTML = 'Solo números pedazo de especial';
        respuesta2.innerHTML = 'Por eso estas sol@ csm 🤡';
    }
    else if (isNaN(parseInt(edad))) {
        respuesta.innerHTML = 'Oe csm ingresa números';
        respuesta2.innerHTML = `no me quieras ver la cara de estúpido 🤡`;
    }
    else {
        respuesta.innerHTML = `Tu edad es ${edad}`;
        respuesta2.innerHTML = `Ahora largate no me molestes`;
    }
});