/* Dado el código HTML proporcionado, programar la función agregarEvento() del archivo script.js, que agregue un evento click al boton miBoton. Utilizando la variable event asociada al evento, y utilizando la propiedad target, se puede acceder al elemento nodeName, que retorna el nombre de la etiqueta HTML que disparo el evento. Se pide imprimir en consola el contenido del elemento nodeName. */

function agregarEvento() {
    let boton = document.getElementById('miBoton');
    
    boton.addEventListener('click', informacion);
}
 
function informacion(event) {
    console.log(event.target.nodeName);
}
