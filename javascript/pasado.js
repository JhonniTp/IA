let enviar = document.getElementById('enviar');
let respuesta = document.getElementById('result');
let respuesta2 = document.getElementById('result2');
let respuesta3 = document.getElementById('result3');

enviar.addEventListener('click', function() {
    let edad = document.getElementById('edad').value.trim();
    if (edad.match(/\D/)) {
        respuesta.innerHTML = 'Solo números pedazo de incerbible';
        respuesta2.innerHTML = 'no me quieras ver la cara de estúpido 🤡';
        respuesta3.innerHTML = `Con razón te dejo tu ex`
    }
    else if (isNaN(parseInt(edad))) {
        respuesta.innerHTML = 'Oe csm ingresa números';
        respuesta2.innerHTML = `no me quieras ver la cara de estúpido 🤡`;
        respuesta3.innerHTML = `tmr tu vida es deprimente`
    }
    else if(edad == 5){
        respuesta.innerHTML = 'No mientas, esa no es tu edad mrd'
        respuesta2.innerHTML = '¿Me quieres ver la cara de idiota🤡?'
        respuesta3.innerHTML = `¿Me quieres engañar así como lo hizo tu ex?`
    }
    else if(edad == 6){
        respuesta.innerHTML = `Hace 5 años tenías ${edad - 5} año.`
        respuesta2.innerHTML = 'pero esa no es tu edad csm'
        respuesta3.innerHTML = `¿Me quieres engañar así como lo hizo tu ex?`
    }
    
    else {
        respuesta.innerHTML = `Hace 5 años tenías ${edad - 5} años.`;
        respuesta2.innerHTML = `Y tu estupides era increible csm`;
        respuesta3.innerHTML = `Lástima que no tengas cura pi pi pi`
    }
});