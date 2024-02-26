function capturarVenta(arg){
    let elementoCapturar = document.getElementById(arg)
    let ventaTienda = elementoCapturar.value;
    let ventasTiendas = Number(ventaTienda);
    return ventasTiendas;
}
function calcular(){
    let venta=[];
    venta[0] = capturarVenta("ventaTienda1");
    venta[1] = capturarVenta("ventaTienda2");
    venta[2] = capturarVenta("ventaTienda3");
    venta[3] = capturarVenta("ventaTienda4");
    let totalVentas = sumaTotal(venta);
    let ventaMayores =  ventaMayor(venta);
    let ventaMenores = ventaMenor(venta);
    let mensajeVentasPantalla = `Las ventas totales son: ${totalVentas} La venta Mayor es: ${ventaMayores}, La venta Menor fue: ${ventaMenores}`;
    let pantallaTexto = document.getElementById("textoPantalla");
    pantallaTexto.textContent = mensajeVentasPantalla;
} 
function sumaTotal(array){
    let  acumulador=0;
    for(let total of array){
        acumulador = acumulador + total;
    }
    return acumulador
}
function ventaMayor(array){
    let mayor = array[0];
    for(let valor of array){
        if (valor > mayor){
            mayor = valor;
    }
}
return mayor;
}
function ventaMenor(array){
    let menor = array[0];
    for(let valorMenor of array){
        if(valorMenor < menor){
            menor = valorMenor;
        }
    }
    return menor;

}

