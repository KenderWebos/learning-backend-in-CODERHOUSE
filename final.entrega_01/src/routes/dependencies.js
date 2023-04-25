import ProductContainer from '../containers/ProductContainer.js';
import CartContainer from '../containers/CartContainer.js';

export const Products = new ProductContainer();
export const Carts = new CartContainer({Products});
