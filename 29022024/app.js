function Empleados(nombres,apellidos,edad,cargo){
    this.nombres= nombres;
    this.apellidos = apellidos;
    this.edad = edad;
    this.cargo = cargo;
    this.presentacion = function(){
        console.log(`Hola me llamo ${nombres} ${apellidos}, tengo ${edad} anios y actualmente ocupo el cargo ${cargo}`);
    }
}
let empleado1 = new Empleados("Juan", "Pelufo", 33, "Gerente");

function Automovil(marca,modelo,anio,color){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
    this.mensaje = function(){
        console.log(`Bienvenido a la presentacion del coche ${marca} del ${modelo} que fue fabricado en ${anio} y que el ${color}, es el favorito de todos`)
    }
}

let carro1 = new Automovil("Chevrolet","Corsa", 2024, "Rojo");
let carro2 = new Automovil("Wolksvaguen", "Jetta", 2018,"Azul" )

