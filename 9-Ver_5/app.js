
function crearParrafoTienda(textoLabel, valorMin){
    // Crear las etiquetas de parrafo
    let elementoParrafo = document.createElement("p");
    // Crear la etiqueta label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ": ";
    //Conectar con el input
    elementoEtiqueta.setAttribute("for", textoLabel);
    // crear le etiqueta input
    let elementoInput = document.createElement("input");
    // establecer atributos de input
    elementoInput.setAttribute( "type" , "number" );
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);
    //agregar label e input a parrafo
    elementoParrafo.appendChild(elementoEtiqueta) ;
    elementoParrafo.appendChild(elementoInput);
    // devolver el parrafo completo
    return elementoParrafo;
}

function crearTiendas(contenedorID, min, cantidadTiendas){
    // encontrar contenedor por su id y se almancena en una variable
    let elementoContenedor = document.getElementById(contenedorID);

    // loop para crear tantas tiendas como se pidan

    for(let conteoTiendas =1; conteoTiendas<=cantidadTiendas; conteoTiendas++){

        // crear el texto de label para poder llamar a la funcion
        let textoEtiqueta = "Tienda " + conteoTiendas

        // vamos a crear tiendas con crearParrafoTienda

        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        // agregar el parrafo al contenedor

        elementoContenedor.appendChild(parrafoTienda);
    }

}

function extraerNumero(inputId){
    let miTexto = inputId.value;
    let miNumero = Number(miTexto);
    return miNumero;
}

function calcular(){
    let ventas =[];
    let posicionVentas = 0;
    let elementosventas = document.getElementById("itemsTiendas");
    for(let item of elementosventas.children){
        let valorVenta = extraerNumero(item.children[1])
        ventas[posicionVentas] = valorVenta;
        posicionVentas++;
    }

    let totalVentas = sumarTotal(ventas)
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas) ;


    let mensajePantalla = `Total Ventas:  ${totalVentas}   Venta Mayor: ${ventaMayor}    Venta Menor:  ${ventaMenor}`


    let mensajeSalida = "Total ventas: " + totalVentas +
                        "/Venta Mayor: " + ventaMayor +
                        "/Venta Menor: " + ventaMenor;
    let elementoSalida = document.getElementById("parrafoSalida")
    elementoSalida.textContent = mensajePantalla;
}

function sumarTotal(array){
    let total = 0;
    for(let venta of array){
        total = total + venta;
    }
    return total

}

function calcularMayor(array){
    let maximo = array[0];
    for(let venta of array){
        if(venta > maximo){
            maximo = venta;
        }
    }
    return maximo
}

function calcularMenor(array){
    let minimo = array[0];
    for(let venta of array){
        if(venta < minimo){
            minimo = venta;
        }
    }
    return minimo
}