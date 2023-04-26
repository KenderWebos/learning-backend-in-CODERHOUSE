import JsonContainer from "./JsonContainer.js";
import createValidator from "./validators/carts.validator.js";

export default class CartsManager extends JsonContainer {
  constructor({ Products }) {
    super({
      filename: "carts",
      validator: createValidator(Products),
    });
    this.Products = Products;
  }
}
