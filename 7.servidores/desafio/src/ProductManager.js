const fs = require('fs/promises');

const path = require('path'); // ayuda a manejar rutas de archivos

class ProductManager {
    route = "./src/";
    filename = "products.json";
    fullPath = this.route + this.filename;

    fullPath = path.resolve(__dirname, this.filename);

    constructor(products = [], path = ".") {
        this.products = products;
        this.path = path;

        this.init().then(() => console.log(this.products));
        // this.getJsonData().then(data => {
        //     this.products = data;
        // }).catch(err => { console.log("Error al leer el archivo JSON: ", err) });
    }

    async init() { // cargar data inicial del json y actualizar el json con los nuevos productos
        const aux = await this.getJsonData();
        for (const product of aux) // el of es para recorrer arrays y objetos iterables (como los arrays) y el in para recorrer objetos.
        {
            if (!product.id) {
                console.log("agregando producto");
                await this.addProduct(product.title, product.description, product.price, product.thumbnail, product.code, product.stock);
            }
            else {
                console.log("actualizando producto");
                this.products.push(product);
            }
        }

        console.log(this.products);
    }

    async addProduct(title, description, price, thumbnail, code, stock) {
        const allInputsNotNull = !!title && !!description && !!price && !!thumbnail && !!code && !!stock;
        const codeIsNotRepeated = !this.products.some(product => product.code === code);
        // const codeIsNotRepeated = !this.products.find(product => product.code === code);


        console.log(allInputsNotNull, codeIsNotRepeated);

        if (allInputsNotNull && codeIsNotRepeated) {
            const id = this.products.length + 1;

            this.products.push({
                id: id,
                code: code,
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock
            });

            await this.setJsonData();
        }
        else return console.log("no se pudo agregar el producto");
    }

    async getJsonData() {
        try {
            const data = await fs.readFile(this.fullPath, 'utf-8');
            return JSON.parse(data);
        } catch (err) {
            console.error("Error al leer el archivo JSON: ", err);
            return null;
        }
    }

    async setJsonData() {
        await fs.writeFile(this.fullPath, JSON.stringify(this.products));
    }

    sayHello() {
        console.log("Hello");
    }

    async getProducts() {
        return await this.products;
    }

    async getProductById(id) {

        return await this.products.find(product => product.id === id); //undefined si no encuentra nada
    }

}

// const productManager = new ProductManager();

// console.log(productManager.getProducts());

// productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

// console.log(productManager.getProducts());

// productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

// console.log(productManager.getProducts());

// console.log(productManager.getProductById(1));

const testing = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
}

module.exports = { ProductManager };
