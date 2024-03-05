// POO

/*
Clases = Modelo a Seguir
Objeto = Es una instancia de una clase
Atributo = Característica o propiedad que tiene un objeto. Puede ser  privado (visible solo para la clase) o público (visble para cualquier persona).......
Metodo = Son las acciones que un objeto puede realizar (Son Funciones dentro de un objeto)




*/

//Funcion Constructora

function Animal(nombre,genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;




    //Metodos
    this.sonar = function(){
        console.log("Hago sonidos porque estoy vivo")
    }
}

const snoopy = new Animal("snoopy","macho");
const lolaByunny = new Animal( "Lola", "hembra" );
console.log(snoopy);
console.log(lolaByunny);