const express = require('express');
const app = express();

// hola mundo con express
app.get('/', (request, response) => {
    response.end('¡Mi primer hola mundo desde backend pero con express!');
});

app.get('/rowdie', (request, response) => {
    response.send('¡Este es un cameo de el row-d!');
});

app.get('/paginaMala', (request, response) => {
    response.sendFile("../7.servidores/index.html");
});

app.get('/pagina', (request, response) => {
    response.sendFile(__dirname + '/index.html');
  });

app.listen(8080, () => { console.log('Servidor iniciado en el puerto 8080') });