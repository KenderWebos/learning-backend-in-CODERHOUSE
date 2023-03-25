class ProductManager{

    constructor(products = []){
        this.products = products;
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const allInputsNotNull = title && description && price && thumbnail && code && stock;
        const codeIsNotRepeated = !this.products.find(product => product.code === code);
        
        if(allInputsNotNull && codeIsNotRepeated)
        {
            const id = this.products.length+1;

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
        }
    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        return this.products.find(product => product.id === id) || "Not found";
    }

}

const productManager = new ProductManager();

console.log(productManager.getProducts());

productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

console.log(productManager.getProducts());

productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

console.log(productManager.getProducts());

console.log( productManager.getProductById(1) );






const testing = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
}
