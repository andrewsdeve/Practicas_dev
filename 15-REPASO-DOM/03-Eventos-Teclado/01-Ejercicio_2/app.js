/* Dado el código HTML proporcionado, programar la función agregarEvento() del archivo index.js, que agregue un evento keydown al input miInput. Al disparar el evento, deberá validar que el usuario no pueda ingresar en el input la barra espaciadora si la presiona. El número key de la barra espaciadora es 32. */

let input = document.getElementById('miInput');

function agregarEvento(e){
    if(e.keyCode == 32){
        e.preventDefault();
        alert('Tecla no valida!!')
    }
}

input.addEventListener('keypress', agregarEvento);