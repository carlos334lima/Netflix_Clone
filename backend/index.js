const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors')

const database = require ("./src/services/database")
const app = express();

const filmeRoutes = require("./src/routes/filmes.routes");
const usuarioRoutes = require("./src/routes/usuarios.routes");

app.use(bodyParser.json());
app.use(cors())
app.use(morgan("dev"));

// O primeiro argumento significa o que "/" será o prefixo de TODAS as minhas rotas.
//Já o segundo argumento significa o arquivo que será utilizado.
app.use("/", filmeRoutes);
app.use("/usuario", usuarioRoutes);


app.listen(3333, () => console.log("Backend Started 🚀"));
