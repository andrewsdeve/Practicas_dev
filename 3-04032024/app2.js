// 1. Creamos el constructor

function Automovil(marca,modelo,color,anio,propietario){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.propietario = propietario;
}

// 2. Creamos las instancias

let automovil1 = new Automovil("Chevrolet", "Sonic", "Gris",2016,"Carlos Martinez");
let automovil2 = new Automovil("Ford","Fiesta","Azul",2018,"Santiago Martinez");
let automovil3 = new Automovil("Wolkswagen","Jetta","Azul",2024,"Rut Contreras");

// 3. Creamos los metodos 

Automovil.prototype.venderAutomovil = function(nvoPropietario){
    this.propietario = nvoPropietario;
};

Automovil.prototype.verAuto = function(){
    return(`${this.marca} ${this.modelo} ${this.anio} ${this.propietario}`);
};

Automovil.prototype.encender = function(){
    alert("Automovil Encendido");
};

// 4. Creamos el array con las instancias creadas anteriormente

let array = [automovil1,automovil2,automovil3];

// 5.Codificamos el boton mostar veiculos con el metodo de onclick mostrar()

function mostrar(){

    let lista = document.getElementById("listadoVehiculos");
    for(let automovil of array){
        let item = document.createElement("li");
        item.innerText = automovil.verAuto();
        lista.appendChild(item);
    }
}