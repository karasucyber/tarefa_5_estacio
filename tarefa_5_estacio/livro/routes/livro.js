const express = require('express');
const router = express.Router();
const livroDao = require('./modelo/livro-dao');

router.get('/', async (req, res) => {
  const livros = await livroDao.obterLivros();
  res.json(livros);
});

router.post('/', async (req, res) => {
  const livro = req.body;
  const resultado = await livroDao.incluir(livro);
  res.json(resultado);
});

router.delete('/:_id', async (req, res) => {
  const codigo = req.params._id;
  const resultado = await livroDao.excluir(codigo);
  res.json(resultado);
});

module.exports = router;
