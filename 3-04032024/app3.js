function Automovil(marca,modelo,color,anio,propietario){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.propietario = propietario;
}
let automovil1 = new Automovil("Chevrolet", "Sonic","Gris",2016,"Carlos Martinez");
let automovil2 = new Automovil("Ford","Fiesta","Azul",2021,"Santy Martinez");
let automovil3 = new Automovil("Wolksvagen","Jetta","Azul",2024,"Luisa Martinez");

Automovil.prototype.venderAutomovil = function(nvoPropietario){
        this.propietario = nvoPropietario;

}

Automovil.prototype.verAuto = function(){
    return(` ${this.marca}  ${this.modelo}  ${this.anio}  ${this.propietario}`);
}

Automovil.prototype.enceder = function(){
    alert("Auto Encendido")
}

let array = [automovil1,automovil2, automovil3];

function mostrar(){
    let lista = document.getElementById("listarVehiculos");

    for(let automovil of array){
        let item = document.createElement("li");
        item.innerText = automovil.verAuto();
        lista.appendChild(item);
    }
}
