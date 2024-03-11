let audio = document.getElementById('audio');
let listadoCanciones = document.getElementById("listaCanciones");


listadoCanciones.addEventListener('change', cambiarCancion);

function cambiarCancion(){
    let cancionElegida = listadoCanciones.value;
    audio.src  = cancionElegida;
    audio.play();
    let evento = new CustomEvent('cambioDeCancion');
    audio.dispatchEvent(evento);
};

audio.addEventListener('cambioDeCancion', mostrarCancion);

function mostrarCancion(){
    console.log('La cancion actual es: ' +listadoCanciones.value);
} 