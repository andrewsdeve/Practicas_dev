function capturarVenta(arg){
    let elementoCapturar = document.getElementById(arg)
    let ventaTienda = elementoCapturar.value;
    let ventasTiendas = Number(ventaTienda);
    return ventasTiendas;
}
function calcular(){
    let venta1,venta2,venta3,venta4;
    venta1 = capturarVenta("ventaTienda1");
    venta2 = capturarVenta("ventaTienda2");
    venta3 = capturarVenta("ventaTienda3");
    venta4 = capturarVenta("ventaTienda4");
    let totalVentas = venta1 + venta2 + venta3 + venta4;
    let mensajeVentasPantalla = `Las ventas totales son: ${totalVentas}`;
    let pantallaTexto = document.getElementById("textoPantalla");
    pantallaTexto.textContent = mensajeVentasPantalla;
} 

