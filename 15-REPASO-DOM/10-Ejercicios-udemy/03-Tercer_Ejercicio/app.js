/* Dado el código HTML proporcionado, programar la función agregarEvento() del archivo index.js, que agregue un evento keypress al input miInput. Al disparar el evento, deberá imprimir en consola el código de la tecla presionada utilizando el elemento key de la variable event. */

let input = document.getElementById("miInput");


function agregarEvento(e){
    e.keypress;
    console.log('Tecla Ingresada: ' + e.key)
}

input.addEventListener('keypress', agregarEvento );