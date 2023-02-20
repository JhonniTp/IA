const text = [ "El uso de nuestro poderosa IA es completamente voluntario, y los usuarios aceptan todos los riesgos asociados con la navegación por nuestro sitio. No se permitirá el uso de nuestra IA para propósitos ilegales, inmorales o para espiar a tu ex, ya superalo csm nunca te amo.",  "No nos hacemos responsables por cualquier lesión, pérdida de tiempo, o desmayos causados por nuestra conciente intelectual que va mas allá de tu entendimiento. No se permite especiales de nivel retrasado para acceder a la IA. ¡Solo seres humanos, por favor! (No monos)", "Asegúrate de lavarte las manos con agua para utilizar la IA y así evitar la propagación del retraso que sufres pedaso de inserbible.", "Se le recuerda que al aceptar nuestros términos y condiciones usted participa por vales del 60% de descuento en nuestros centros de reavilitación, Hospitales psiquiátricos o unidades psiquiátricas, Centros de salud mental y las Instituciones para personas con discapacidad mental, ¡¡TE ESPERAMOS!!","Si tienes alguna duda, no dudes en metertela por ya sabes donde y además de que no me interesa escucharlo te recuerdo que tus dudas me las paso por donde no llega el sol."];

let i = 0;
let j = 0;

function typeWriter() {
    if (i < text.length) {
        if (j < text[i].length) {
            document.getElementById("text1").innerHTML += text[i].charAt(j);
            j++;
            setTimeout(typeWriter, 40);
        } 
        else {
            i++;
            j = 0;
            document.getElementById("text1").innerHTML += "<br><br>";
            setTimeout(typeWriter, 500);
        }
    } else {
        document.getElementById("acepto").classList.add("show");
    }
}

typeWriter();



