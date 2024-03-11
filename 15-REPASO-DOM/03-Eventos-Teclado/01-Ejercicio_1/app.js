let campo = document.getElementById('miCampo');
function verificarNumero(evento){
    if(event.keyCode < 48 || event.keyCode > 57){
        evento.preventDefault();
    };
};

campo.addEventListener('keydown', verificarNumero);


campo.addEventListener('keyup', function(e){
    console.log('Entrada del usuario: ' + e.target.value)
});

campo.addEventListener('keypress',function(e){
    console.log('Caracter Ingresado: ' + e.key)
})