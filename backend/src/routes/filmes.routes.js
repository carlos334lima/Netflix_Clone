/* 
  QUERY PARAMS: Filtros e paginação; (Get)
  ROUTE PARAMS: Identificar recursos (atualizar/deletando)
  REQUEST BODY: Conteúdo na hora de criar/ editar (JSON)
*/

const express = require("express");

const router = express.Router();

//Recuperar todos os registros
router.get("/", (req, res) => {
  res.json({ message: "GET ALL" });
});

//Recuperar registro com ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ message: `${id}` });
});

//Criar um registro
router.post("/", (req, res) => {
  const body = req.body;

  res.json(body);
});

//Atualizar um registro
router.put("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ atualizar: `${id}` });
});

//Deletar um registro
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ deletar: `${id}` });
});

module.exports = router;
