let link = document.getElementById("miLink");

function agregarEvento(event){
    event.preventDefault();
    alert("Enlace No habilitado");
}

link.addEventListener("click", agregarEvento);