//@ts-check
import path from "path";
import express from "express";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

const server = app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

