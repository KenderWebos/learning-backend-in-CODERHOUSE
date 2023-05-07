import express from "express";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.router.js";
import { engine } from "express-handlebars";

import ProductContainer from "./containers/ProductContainer.js";
import CartContainer from "./containers/CartContainer.js";
import createSocketServer from "./socket.io.js";

const app = express();
export const Products = new ProductContainer();
export const Carts = new CartContainer({ Products });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "views");

app.use("/api/products", productsRouter(Products));
app.use("/api/carts", cartsRouter(Carts));
app.use("/", viewsRouter(Products));

const server = createSocketServer(app, Products);

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
