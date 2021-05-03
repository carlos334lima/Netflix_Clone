//"Esqueleto" do banco de dados

const mongoose = require("mongoose");

const Filme = mongoose.model("Filme", {
  titulo: {
    type: String,
    required: true, // Validação de campo (Não pode inserir campo vazio)
  },
  atores: Array,

  ano: Number,

  detalhes: Object,

  premiacoes: [Object],
});

module.exports = Filme;
