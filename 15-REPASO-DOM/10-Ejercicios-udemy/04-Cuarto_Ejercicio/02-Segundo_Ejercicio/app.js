/* Dado el código HTML proporcionado, programar la función agregarEvento() del archivo index.js, que agregue un evento mouseout al boton miBoton. Al disparar el evento, deberá imprimir en consola el mensaje: Mouse por fuera de botón */


let boton = document.getElementById("miBoton");

function agregarEvento(event){
        event.mouseout;
        return event;
};

boton.addEventListener( "mouseout", function(){
    console.log ("Has salido el Botón   !");
});