const express = require("express");
const app = express();
const pm = require("./ProductManager.js"); // importamos el modulo ProductManager.js

const productManager = new pm.ProductManager();

app.use(express.urlencoded({ extended: true })); // esto hace que el body de la request sea un objeto de javascript
app.use(express.json()); // esto hace que el body de la request sea un objeto de javascript

let count = 0;

app.get("/", (request, response) => {
    productManager.sayHello();
    response.send(`hola brother ${count++}`);
});

app.get("/products",async (request, response) => {
    const limit = request.query.limit;
    const data = await productManager.getProducts();
    response.send(data.slice(0, limit ?? data.length)); // se hace un slice de los productos para que solo devuelva los que se le piden
});

app.get("/products/:id",async (request, response) => {
    const data = await productManager.getProductById( parseInt(request.params.id) );
    if(data){
        response.send(data);
    }else{
        response.status(404).send({error: "producto no encontrado bro"}); //404 not found
    }
});

app.listen(8080, () => { console.log("Iniciando en puerto 8080") });