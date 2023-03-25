const objetos = [
    {
        manzana: 3,
        peras: 2,
        carne: 1,
        jugos: 2,
        dulces: 1
    },

    {
        manzana: 1,
        peras: 2,
        carne: 3,
        jugos: 4,
        dulces: 5,
    }
]

const allProducts = [];

objetos.forEach(objeto => {
    Object.keys(objeto).forEach(producto => { if(!allProducts.includes(producto)){allProducts.push(producto)} })
})

console.log(allProducts);