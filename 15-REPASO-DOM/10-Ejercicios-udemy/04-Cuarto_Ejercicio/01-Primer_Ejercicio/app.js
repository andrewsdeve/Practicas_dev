/* Dado el código HTML proporcionado, programar la función agregarEvento() del archivo index.js, que agregue un evento mouseover al boton miBoton. Al disparar el evento, deberá imprimir en consola el mensaje: Mouse sobre botón */

let boton = document.getElementById("miBoton");

function agregarEvento(e){
    e.mouseover;
    console.log('Mouse sobre Boton')
}

boton.addEventListener('mouseover', agregarEvento);