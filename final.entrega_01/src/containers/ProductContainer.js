import JsonContainer from "./JsonContainer.js";
import productValidator from "./validators/products.validator.js";

export default class ProductManager extends JsonContainer {
  constructor() {
    super({
      filename: "products",
      validator: productValidator,
    });
  }
}
