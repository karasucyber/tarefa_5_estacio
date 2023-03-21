let express = require("express");
let router = express.Router();

const Livro = require("../modelo/livro-dao");

router.get("/livro", Livro.obterLivros);
router.post("/livro", Livro.incluir);
router.delete("/livro/:id", Livro.excluir);

module.exports = router;
