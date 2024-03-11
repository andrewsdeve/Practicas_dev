let campo = document.getElementById('miCampo');
function verificarNumero(evento){
    if(event.keyCode < 48 || event.keyCode > 57){
        evento.preventDefault();
    };
};

campo.addEventListener('keydown', verificarNumero);