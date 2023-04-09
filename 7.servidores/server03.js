const express = require('express');
const app = express();

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jim' },
]

// hola mundo con express
app.get('/', (request, response) => {
    response.end('¡Mi primer hola mundo desde backend pero con express!');
});

app.get('/users/:id', (request, response) => {

    response.send(users[request.params.id]);
});

app.get('/pagina', (request, response) => {
    response.sendFile(__dirname + '/index.html');
  });

app.listen(8080, () => { console.log('Servidor iniciado en el puerto 8080') });