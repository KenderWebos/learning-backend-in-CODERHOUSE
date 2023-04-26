import { Router } from "express";
import { Carts } from "./dependencies.js";

const router = Router();

router.get("/:cid", async (req, res, next) => {
  try {
    const cart = await Carts.getItem(Number(req.params.cid));
    res.json(cart.products);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await Carts.addItem(req.body);
    res.json({ message: "Carrito creado" });
  } catch (error) {
    next(error);
  }
});

// FIXME: por que usar POST y no PUT, si realmente lo que hacemos es actualizar los productos del carrito ?
router.post("/:cid/product/:pid", (req, res, next) => {
  try {
    const cid = Number(req.params.cid);
    const pid = Number(req.params.pid);
    const quantity = Number(req.body);

    if (quantity > 0) {
      const cart = Carts.getItem(cid);
      const productIndex = cart.findIndex((p) => p.id === pid);
      if (productIndex !== -1) {
        cart.products[productIndex].quantity += quantity;
        Carts.updateItem(cid, cart, false);
      } else {
        if (Carts.Products.hasItem(pid)) {
          cart.products.push({ pid, quantity });
          Carts.updateItem(cid, cart, false);
        }
      }
      res.json({
        message: "Producto agregado al carrito",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  if (error) {
    res.send({ message: error.message });
  }
  next();
});

export default router;
