
const Livro = require('./livro-schema');



export const Livro = require("./livro-schema")

const obterLivros = async () => {
    try{
        const livros = await livros.find({});
        return livros;
    }catch (error){
        console.error(error);
        return []
    }
}



export const incluir = async (Livro) =>{
    try{ const livroincluido = await Livro.create(livro);
        console.log(`Livro incluído com sucesso: ${livroIncluido}`);
        return livroIncluido;
    }catch(erro){
        console.error("Erro ao incluir")
        throw erro;
    }
};

 export const excluir = async (codigo) =>{
    try{
        const resultado = await Livro.deleteOne({_id: codigo});
        console.log(`Livro excluído com sucesso: ${resultado}`);
        return resultado;
    }catch(erro){
        console.error("erro ao excluir");
        throw erro;
    }
}



module.exports = {
    obterLivros,
    incluir,
    excluir
  };