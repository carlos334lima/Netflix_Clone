const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const routes = require("./src/routes/filmes.routes");

app.use(bodyParser.json());
app.use(morgan("dev"));

// O primeiro argumento significa o que "/" será o prefixo de TODAS as minhas rotas.
//Já o segundo argumento significa o arquivo que será utilizado.
app.use("/", routes);

mongoose.connect("mongodb://localhost:27017/netflix", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3333, () => console.log("Backend Started 🚀"));
