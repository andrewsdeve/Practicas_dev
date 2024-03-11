/* Declarar una variable socket, que establezca una comunicación con el servidor ws://localhost:8080 y a través del mismo, enviar el mensaje "¡Hola mundo!" */

let socket = new WebSocket('ws://localhost:8080');
socket.addEventListener('open',function(event){
    console.log("Connected to server");
    socket.send('Hola Mundo');
});