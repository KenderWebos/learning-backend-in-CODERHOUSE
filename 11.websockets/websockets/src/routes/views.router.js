import { Router } from "express";

export default function (Products) {
  const router = Router();

  router.get("/", async (req, res) => {
    res.render("home", {
      title: "Products",
      products: await Products.getItems(),
    });
  });

  router.get("/realtimeproducts", async (req, res) => {
    res.render("realtimeproducts", {
      title: "Realtime Products",
      products: await Products.getItems(),
    });
  });

  router.post("/productview", async (req, res) => {
    const body = req.body;

    res.render("partials/product", {
      ...body,
    });
  });

  return router;
}
