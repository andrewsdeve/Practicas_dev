// 1. Codificamos el constructor

function Automovil(marca,modelo,color,anio,propietario){
    this.marca =  marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.propietario = propietario;
}

// 2. Creamos las instanacias para Automovil

let automovil1 = new Automovil("Chevrolet","Sonic","Gris",2016,"Carlos Martinez");
let automovil2 = new Automovil("Ford","Fiesta","Azul",2018,"Juan Garcia");
let automovil3 = new Automovil("Wolksvagen", "Jetta", "Rojo", 2024,"Santy Martinez");

// 3. Creamos los metodos

Automovil.prototype.venderAutomovil = function(nuevoPropietario){
    this.propietario = nuevoPropietario;
}

Automovil.prototype.verAuto = function(){
    return (`${this.marca} ${this.modelo} ${this.anio} ${this.propietario}`)
}

Automovil.prototype.encender = function(){
    alert("El auto se ha encendido");
}

// 4. Creamos el array con las instancias declaradas anteriormente

let array = [automovil1,automovil2,automovil3];

// 5. Programamos la funcion del boton mostrar veihciulos

function mostrar(){

    let lista=document.getElementById("listadoAutos");
    for(let automovil of array){
        let item = document.createElement("li");
        item.innerText = automovil.verAuto();
        lista.appendChild(item);
    }

}