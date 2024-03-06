sARRAYS

1. Como recorrer Arrays
2. Agregar Elementos al Array
3. Eliminar elementos
4. Conocer el indice de un elemento
5. Copiar un Array.
6. Longitud de un Array


/*Creacion de un array*/

let misAmigos = ["Monica", "Juan", "Pedro", "Camilo", "Roberto", "Santy"];

/*Para saber la longitud de un array lo hacemos con la propiead length  de esta manera*/

misAmigos.Length => el cual me mostrar la cantidad de indices que componen este arreglo

/*Para mostrar un indice exacto dentro del array se realiza de la sigueinte manera*/

misAmigos[4] => Mostrara a "Roberto", quien es el que esta en la posicion 4 del arreglo.

/*Para elminar un elemento de un array utilizamos*/

misAmigos.pop() => Este metodo eliminara el ultimo elemento del Array.

/*Para agregar un elemento al principio del array utilizamos el siguiente metodo*/

misAmigos.unshift("Luis") => Esto agrego "Luis" como primer elemento de mi Array.

/*Añadir un elmento al final de un array*/
misAmigos.push("Marco")=> esto agregaria Marco al final de mi Array.

/*Para copiar un array y mantener los datos originales, podemos hacer lo siguiente:*/

let amigosOriginales= misAmigos;
amigosOriginales [5]="Luis";    
console.log(misAmigos); //Imprime ["Monica","Juan","Pedro","Camilo","Roberto","Santy"]
console.log(amigosOriginales);// Imprime ["Monica","Juan","Pedro","Camilo","Roberto","Santy","Luis"].</s>

/*Para eliminar el primer elemento del array*/
let frutas = ['Manzana', 'Banano', 'Mango'];
frutas.shift(); // Retira el primero elemento del array (Manzana)
console.log(frutas); // 

/*Encontrar el indice de un elemento del array*/

misAmigos.indexOf("Camilo"); //Retorna 3 porque Camilo esta en la posicion 3 del array







