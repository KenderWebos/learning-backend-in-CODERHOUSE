const express = require('express');
const app = express();

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jim' },
]

app.get("/fc", (request, response) => {
    response.send("feliz cumpleaños " + request.query.name);
});

app.listen(8080, () => { console.log('Servidor iniciado en el puerto 8080') });