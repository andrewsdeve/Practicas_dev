function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}
function calcular(){
    let ventas1, ventas2, ventas3, ventas4;
    ventas1 = extraerNumeroDesdeElemento("ventasTienda1");
    ventas2 = extraerNumeroDesdeElemento("ventasTienda2");
    ventas3 = extraerNumeroDesdeElemento("ventasTienda3");
    ventas4 = extraerNumeroDesdeElemento("ventasTienda4");

    /* Hacemos los calculos */

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4;

    /* Creamos mensaje para mostrar en el parrafo de salida */

    let mensajeSalida = `Total Ventas: ${totalVentas}`;

    // capturamos parrafo donde va la salida

    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;



}