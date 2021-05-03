const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const database = require ("./src/services/database")
const app = express();

const routes = require("./src/routes/filmes.routes");

app.use(bodyParser.json());
app.use(morgan("dev"));

// O primeiro argumento significa o que "/" será o prefixo de TODAS as minhas rotas.
//Já o segundo argumento significa o arquivo que será utilizado.
app.use("/", routes);


app.listen(3333, () => console.log("Backend Started 🚀"));
