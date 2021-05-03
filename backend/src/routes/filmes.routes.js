/* 
  QUERY PARAMS: Filtros e paginação; (Get)
  ROUTE PARAMS: Identificar recursos (atualizar/deletando)
  REQUEST BODY: Conteúdo na hora de criar/ editar (JSON)
*/

const express = require("express");

const Filme = require("../models/filme");

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
router.post("/", async (req, res) => {
  try {
    const filme = req.body; //Capturando o corpo da requisição
    const response = await new Filme(filme).save(); // Criando um novo filme e salvando no banco

    res.json({ error: false, filme: response });
  } catch (err) {
    res.json({ error: true, message: err.message }); //apresentando mensagem de error
  }
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
