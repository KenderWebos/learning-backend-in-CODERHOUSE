//@ts-check
import path from "path";
import express from "express";
import usersRouter from "./routes/user.router.js";
import petsRouter from "./routes/pet.router.js";

const currentDirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${currentDirname}/public`));

console.log("currentDirname: ", currentDirname);

app.use("/users", usersRouter);
app.use("/pets", petsRouter);

const server = app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

