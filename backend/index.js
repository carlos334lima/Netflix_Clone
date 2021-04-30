const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

/* 
  QUERY PARAMS: Filtros e paginação; (Get)
  ROUTE PARAMS: Identificar recursos (atualizar/deletando)
  REQUEST BODY: Conteúdo na hora de criar/ editar (JSON)
*/

app.get("/", (req, res) => {
  res.json({ message: "GET ALL" });
});

app.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ message: `${id}` });
});

app.post("/", (req, res) => {
  const body = req.body;

  res.json(body);
});

app.put("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ atualizar: `${id}` });
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ deletar: `${id}` });
});

app.listen(3333, () => console.log("Backend Started 🚀"));
