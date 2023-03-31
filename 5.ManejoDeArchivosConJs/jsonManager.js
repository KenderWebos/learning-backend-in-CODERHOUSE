const fs = require('fs');

// Creamos un objeto JSON
const datos = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Buenos Aires'
};

// Convertimos el objeto JSON a un string
const datosString = JSON.stringify(datos);

// Escribimos el archivo JSON
fs.writeFileSync('datos.json', datosString);

// Leemos el archivo JSON
const datosLeidos = fs.readFileSync('datos.json');

// Convertimos el contenido del archivo a un objeto JavaScript
const datosObjeto = JSON.parse(datosLeidos);

// Mostramos el objeto JavaScript por consola
console.log(datosObjeto);