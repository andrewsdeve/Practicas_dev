let boton = document.getElementById("miBoton");

function mostrarMensaje(){
    alert('Boton Presionado')
}

function otroMensaje(){
    alert('Flotar')
}

boton.addEventListener('click', mostrarMensaje);
boton.addEventListener('mouseover', otroMensaje);
