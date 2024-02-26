function capturarIdVentas(arg){
    let elementoCapturar = document.getElementById(arg);
    let miNumero = elementoCapturar.value;
    let numeroVenta = Number(miNumero);
    return numeroVenta;
}
function calcular(){
    let venta1, venta2, venta3, venta4;
    venta1 = capturarIdVentas("ventaTienda1");
    venta2 = capturarIdVentas("ventaTienda2");
    venta3 = capturarIdVentas("ventaTienda3");
    venta4 = capturarIdVentas("ventaTienda4");


    /* Creamos la operacion */

    let ventaTotal = venta1 + venta2 + venta3 + venta4;

    /* Creamos mensaje */

    let mensajeTexto = `Las ventas Totales Fueron: ${ventaTotal}`

    /* ahroa capturamos el texto que debe salir en pantalla */

    let texto = document.getElementById("textoPantalla");

    texto.textContent =  mensajeTexto;
}

