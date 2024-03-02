// 1. Creamos un Array vacio

let empleados = [];

// 2. Creamos el objeto constructor

function Empleados(idEmpleado, nombre, apellido, nacimiento, cargo){
    this.idEmpleado = idEmpleado;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}

// 3. Programar la funcion agregar(), para guardar la informacion de los empleados

function agregar(){
    // Capturamos la informacion ingresada en los input
    let idempleado = document.getElementById("idEmpleado").value;
    let nombre = document.getElementById("textNombre").value;
    let apellido = document.getElementById("textApellido").value;
    let nacimiento = document.getElementById("textNacimiento").value;
    let cargo = document.getElementById("textCargo").value;
    // creamos la instancia
    let nvoEmpleado = new Empleados(idempleado,nombre,apellido,nacimiento,cargo);
    //agegarmos la informacion al array
    empleados.push(nvoEmpleado);
    // mostramos en el alert que el empleado fue registado exitosamente
    alert("Registro Exitoso");
    //Limpiamos los campos con una nueva funcion
    limpiarCampos();
}

// 4. Creacion funcion limpiar campos despues de haber ingresado los empleado

function limpiarCampos(){
    document.getElementById("idEmpleado").value = " ";
    document.getElementById("textNombre").value = " ";
    document.getElementById("textApellido").value = " ";
    document.getElementById("textNacimiento").value = " ";
    document.getElementById("textCargo").value = " ";
}

// 5. Creamos la funcion listar

function listar(){
    let lista = " ";
    for(let empleado of empleados){
        for(let prop in empleado){
            lista = lista + prop.toUpperCase() + " : " + empleado[prop];
        }
        lista = lista + "\n";
    }
    alert(lista);
}