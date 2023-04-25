import productValidator from './products.validator.js';

export default function(Products){
    return (cart,carts) => {
        if(cart.products && Array.isArray(cart.products)){
            return cart.products.every(product => productValidator(product, Products.items))
        }
    }
   
}
