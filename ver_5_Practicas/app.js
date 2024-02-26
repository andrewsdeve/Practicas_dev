/* Haciendo uso de lo visto en la clase anterior, implementar la función automatizarSuma() que debe calcular y guardar el resultado de sumar el contenido de los inputs en la variable sumaTotal. Para ello, hacer uso de la propiedad children vista y tener en cuenta que la estructura de elementos en nuestra página HTML es la siguiente:

<div id="contenido">

    <p>

        <label>

        <input> */

/* CREAMOS LOS PARRAFOS DE CALCULAR SUMA */

function crearParrafosCalcular(textLabel, valorMin){
    // Creamos Elemento Parrafo
    let elementoParrafo = document.createElement( "p" );
    // Creamos Etiqueta Label
    let elementoLabel = document.createElement("label");
    // Creamos atributo a label para conectar con input
    elementoLabel.setAttribute("for", textLabel);
    //Creamos Elemento input
    let elementoInput = document.createElement("input");
    // Agregamos los atriburos a Input
    elementoInput.setAttribute( "type","number");
    elementoInput.setAttribute("id", textLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute( "value",0);
    /* Agreamos el lable e input al parrafo  */
    elementoParrafo.appendChild (elementoLabel) ;
    elementoParrafo.appendChild (elementoInput);
    return elementoParrafo;
}
// Creamos los elementos cuantas veces sean posibles

function crearElementos(contenedorID, min, cantidadElementos){
    //Encontrar el id del contenedor que alberga los elementos
    let elementoContedor = document.getElementById(contenedorID);
    //Loop para crear tantos elementos se necesiten
    for(let conteoContenido = 1; conteoContenido <= cantidadElementos; conteoContenido++){
        let textoEtiqueta = "Nota: " + conteoContenido;
        //crear contenidos con crear parrafo calcular
        let  parrafoCreado = crearParrafosCalcular(textoEtiqueta, min);

        //agregar el parrafo al contenedor
        elementoContedor.appendChild(parrafoCreado);
    }
    }

function extraerValor(elemento){
    let elementoExtraer = elemento.value;
    let valorExtraido = Number(elementoExtraer)
    return valorExtraido;
}
function calcular(){
    let calculo = [];
    let posicionCalculo = 0;
    let elementoCalculo = document.getElementById("contenido");
    for(let item of elementoCalculo.children){
        let valorItem = extraerValor(item.children[1]);
        calculo[posicionCalculo] = valorItem;
        posicionCalculo++;
    }

    let calculoTotal = sumarTotal(calculo);
    let resultado = `la suma es:  ${calculoTotal}`;
    let resultadoTexto = document.getElementById("textoResultado");
    resultadoTexto.textContent = resultado;
}
function sumarTotal(array){
    let total = 0;
    for(let suma of array){
        total = total + suma;
    }
    return total;
}