import { Router } from "express";

export default function (Products) {
  const router = Router();

  router.get("/", async (req, res, next) => {
    try {
      return res.json(await Products.getItems());
    } catch (error) {
      next(error);
    }
  });

  router.get("/:pid", async (req, res, next) => {
    try {
      return res.json(await Products.getItem(Number(req.params.pid)));
    } catch (error) {
      next(error);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      res.json(await Products.addItem(req.body));
    } catch (error) {
      next(error);
    }
  });

  router.put("/:pid", async (req, res, next) => {
    try {
      return res.json(
        await Products.updateItem(Number(req.params.pid), req.body, false)
      );
    } catch (error) {
      next(error);
    }
  });

  router.delete("/:pid", async (req, res, next) => {
    try {
      return res.json(await Products.deleteItem(Number(req.params.pid)));
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

  return router;
}
