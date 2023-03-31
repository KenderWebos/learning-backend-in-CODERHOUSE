// Función que se ejecutará cada segundo
function mostrarHora() {
    const fecha = new Date();
    console.log(`La hora actual es: ${fecha.toLocaleTimeString()}`);
  }
  
  // Llamamos a la función cada segundo (1000ms)
  setInterval(mostrarHora, 1000);