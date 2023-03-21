
const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
    _id: banco.Schema.Types.objectld,
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String]
});

export const livros = Livro.model('livros', LivroSchema);

