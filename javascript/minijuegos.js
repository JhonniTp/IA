const ruleta = document.querySelector('.ruleta');
const opciones = ruleta.querySelectorAll('.ruleta-opcion');
const indicador = ruleta.querySelector('.ruleta-indicador');
const boton = document.querySelector('.boton');

let anguloActual = 0;
let anguloInicial = -Math.PI / 2;
let pasoAngulo = (2 * Math.PI) / opciones.length;
let anguloFinal;

opciones.forEach((opcion, index) => {
  opcion.style.transform = `rotate(${index * pasoAngulo}rad)`;
});

boton.addEventListener('click', () => {
  boton.disabled = true;
  anguloFinal = Math.floor(Math.random() * opciones.length) * pasoAngulo;
  anguloFinal += anguloInicial + pasoAngulo / 2;
  let rotacionTotal = anguloFinal - anguloActual;
  let contador = 0;

  const rotarRuleta = () => {
    anguloActual += rotacionTotal * 0.1;
    contador++;

    if (contador >= 30) {
      clearInterval(intervalo);
      boton.disabled = false;
      anguloActual = anguloFinal - 0.05;
      const index = Math.floor((anguloActual - anguloInicial) / pasoAngulo);
      indicador.textContent = opciones[index].textContent;
      if (opciones[index].textContent === 'Nadie te quiere') {
        alert('Lo siento :(');
      } else if (opciones[index].textContent === 'Te quiero') {
        alert('¡Yo también te quiero!');
      }
    } else {
      const rotacion = anguloActual * (180 / Math.PI);
      ruleta.style.transform = `rotate(${rotacion}deg)`;
    }
  };

  const intervalo = setInterval(rotarRuleta, 10);
});
