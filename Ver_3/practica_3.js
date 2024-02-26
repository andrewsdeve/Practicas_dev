/* En la función ya declarada, calcule el promedio de notas del array e imprima en consola el resultado del calculo realizado. */

let notas = [6,9,7,5,1,5,4,3];
function promedioNota(array){
    let nota = 0;
    for(let promedio of array){
        promedio = promedio + nota / 8;
        return promedio;
    }
    
}

/* En la función ya declarada, obtenga la menor nota del array e imprima en consola la misma. */

let numeros = [4,5,8,6,3,2,6,8,8];

function menorNumero(array){
    let minimo = array[0];
    for(let menorNumero of array){
        if(menorNumero < minimo){
            minimo = menorNumero;
        }
    }
    return minimo;
}