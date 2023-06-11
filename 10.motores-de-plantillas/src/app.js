const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`));
app.engine(".hbs",engine({ extname: ".hbs", }));
app.set("view engine", ".hbs");
app.set("views", path.resolve(__dirname, "../views"));
// QUE PASA KENDERWEBOS

app.get("/", (req, res) => {
  res.render("home", {
    title: "Mi primera página con Handlebars",
    message: "¡Hola Handlebars!",
  });
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
