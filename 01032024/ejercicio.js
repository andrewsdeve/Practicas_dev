let empleados = [];
function Empleados(id, nombre, apellido, nacimiento, cargo){
    this.id= id;
    this.nombre= nombre;
    this.apellido= apellido;
    this.nacimiento= nacimiento;
    this.cargo= cargo;
}

function agregar(){
    let id = document.getElementById("textId").value;
    let nombre = document.getElementById("textNombre").value;
    let apellido = document.getElementById("textApellido").value;
    let nacimiento = document.getElementById("textNacimiento").value;
    let cargo = document.getElementById("textCargo").value;
    let nvoEmpleado = new Empleados(id,nombre,apellido,nacimiento,cargo);
    empleados.push(nvoEmpleado);
    alert('Se ha agregado el registro');
    limpiarDatos();
}

function limpiarDatos(){
    document.getElementById("textId").value = " ";
    document.getElementById("textNombre").value = " ";
    document.getElementById("textApellido").value = " ";
    document.getElementById("textNacimiento").value = " ";
    document.getElementById("textCargo").value = " ";
}

function listar(){

    let listas = " ";

    for(let empleado of empleados){
        for(let prop in empleado){
            listas = listas + prop.toUpperCase() + ": " + empleado[prop];
        }
        listas = listas + "\n "
    }
    alert(listas);
    
}