function validProduct({ title, description, price, thumbnail, code, stock }) {
  if (!title && !description && !price && !thumbnail && !code && !stock)
    return false
  if (typeof title != 'string') return false
  if (typeof description != 'string') return false
  if (typeof price != 'number') return false
  if (typeof thumbnail != 'string') return false
  if (typeof code != 'string') return false
  if (typeof stock != 'number') return false
  return this.products.some((p) => code !== p.code)
}

class ProductManager {
  constructor(products = []) {
    if (Array.isArray(products)) {
      if (products.length !== 0 && products.some((p) => !validProduct(p))) {
        throw new Error("The array dont have valid product")
      }
      this.products = products
    }
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (
      validProduct({ title, description, price, thumbnail, code, stock })
    ) {
      const id = this.products.length
      this.products.push({
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      })
    }
  }

  getProducts() {
    return this.products
  }

  getProductById(id) {
    if (id && typeof id === 'number') {
      return this.products.find((p) => p.id === id) || 'not found'
    }
  }
}