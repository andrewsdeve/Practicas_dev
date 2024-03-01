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