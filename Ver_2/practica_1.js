/* Implementar la función obtenerUltimoNumero(), donde deberá imprimir en consola el ultimo registro del array ya declarado, utilizando uno de los métodos vistos. */

let array = [1,2,3,4,5,6];

function obtenerUltimo(){
    let eliminado = array.pop()
    return eliminado;
}

/* Implementar la función cantidadDeElementos(), donde deberá imprimir en consola la cantidad de elementos que contiene el array ya declarado, utilizando uno de los métodos vistos. */

function cantidadElementos(){
    let cantidad = array.length;
    return cantidad;
}