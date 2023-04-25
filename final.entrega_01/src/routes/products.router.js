import { Router } from "express";
import ProductContainer from "../containers/ProductContainer.js";
import { Products } from "./dependencies.js";

const router = Router();

router.get("/", async (req, res) => {
  return res.json(await Products.getItems());
});

router.get("/:pid", async (req, res) => {
  return res.json(await Products.getItem(req.params.pid));
});

router.post("/", async (req, res, next) => {
  try {
    res.json(await Products.addItem(req.body));
  } catch (error) {
    next(error);
  }
});

router.put("/:pid", async (req, res) => {
  return res.json(await Products.updateItem(req.params.pid, req.body));
});

router.delete("/:pid", async (req, res) => {
  return res.json(await Products.deleteItem(req.params.pid));
});

router.use((error, req, res, next) => {
  if (error) {
    res.send({ status: "error", message: error.message });
  }
  next();
});

export default router;
