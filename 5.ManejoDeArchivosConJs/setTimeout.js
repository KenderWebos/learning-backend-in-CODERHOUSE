const temporizador = (callback) =>{ // para setear el tiempo de espera de la funcion callback
    setTimeout(callback, 5000);
}

let operacion = () => console.log("HolaMundo con delay");

console.log("iniciando tarea");

temporizador(operacion);

console.log("finalizando tarea");