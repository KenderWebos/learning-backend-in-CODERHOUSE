export default function (Products) {
  return (cart, carts) => {
    if (cart.id) {
      return false;
    } else if (cart.products && Array.isArray(cart.products)) {
      return (
        cart.products.length > 0 &&
        cart.products.every((product) => product.id && product.quantity) &&
        cart.products.every((product) =>
          Products.items.some((item) => item.id === product.id)
        )
      );
    }
    return false;
  };
}
