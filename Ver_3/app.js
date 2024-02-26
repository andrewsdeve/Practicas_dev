function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}
function calcular(){
    let ventas1, ventas2, ventas3, ventas4;
    ventas1 = extraerNumeroDesdeElemento("ventaTienda1");
    ventas2 = extraerNumeroDesdeElemento("ventaTienda2");
    ventas3 = extraerNumeroDesdeElemento("ventaTienda3");
    ventas4 = extraerNumeroDesdeElemento("ventaTienda4");

    /* Hacemos los calculos */

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4;

    /* Creamos mensaje para mostrar en el parrafo de salida */

    let mensajeSalida = `Total Ventas: ${totalVentas}`;

    // capturamos parrafo donde va la salida

    let elementoSalida = document.getElementById("textoPantalla");

    elementoSalida.textContent = mensajeSalida;



}




















/* Operaciones con Arrays

let ventas = [130,45,239,123,235,987,345];


let total = 0;
for(let venta of ventas){
    total = total + venta;
}
return total;


let maximo = ventas[0];
for(let venta of ventas){
    if(venta > maximo){
        maximo = venta;
    }
}
return maximo;

let minimo = ventas[0];
for(let venta  of ventas) {
    if (venta < minimo) {
        minimo = venta;
    }
}
return minimo;

*/