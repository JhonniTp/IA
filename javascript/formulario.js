// Obtener el formulario
const form = document.querySelector('form');
let paga = document.getElementById('paga');

// Agregar el listener al evento submit
paga.addEventListener('click', hacerPago);

function hacerPago(e) {
  e.preventDefault(); // Evita que el formulario se envíe
  // Obtener los valores de los campos de entrada
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const pais = document.getElementById('pais').value;
    const tarjeta = document.getElementById('tarjeta').value;
    const vencimiento = document.getElementById('vencimiento').value;
    const cvv = document.getElementById('cvv').value;
    const direccion = document.getElementById('direccion').value;
    
  // Verificar que se hayan ingresado todos los campos
    if (!nombre || !correo || !telefono || !pais || !tarjeta || !vencimiento || !cvv || !direccion) {
        alert('Por favor, complete todos los campos.');
        return;
    }

  // Mostrar mensaje de éxito
    const mensaje = document.getElementById('mensaje');
    mensaje.classList.add('mensaje');
    mensaje.textContent = 'Pago exitoso! Gracias por su compra.';

  // Agregar una animación para el mensaje
    setTimeout(() => {
        mensaje.classList.add('mostrar');
    }, 100);
}
