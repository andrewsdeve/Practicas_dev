/* Primero vamos a calcular los valores ingresados por el usuario en los inputs */

function capturarValores(arg){
    let elementoCaptura = document.getElementById(arg) // Capturlo el Input que me enviaron
    let valorIngresado = elementoCaptura.value;
    let valor = Number(valorIngresado);
    return valor;
}

/* Programamos la funcion del boton */

function  calcular(){
    let venta1, venta2, venta3, venta4;

    venta1 = capturarValores("ventaTienda1");
    venta2 = capturarValores("ventaTienda2");
    venta3 = capturarValores("ventaTienda3");
    venta4 = capturarValores("ventaTienda4");

    /* Calculamos la operacion de las ventas realizadas */

    let ventaTotal = venta1 + venta2 + venta3 + venta4;

    /* creamos el texto que va a salir en pantalla */

    let textoSalida = `Las Ventas Totales son: ${ventaTotal}`;

    /* Capturamos el texto de pantalla y mostramos el resultado */

    let salidaTexto = document.getElementById("textoPantalla");
    salidaTexto.textContent = textoSalida;


}