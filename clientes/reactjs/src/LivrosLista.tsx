import React, { useState, useEffect } from "react";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

import { Livro } from "./modelo/Livro";
import Menu from "./Menu";

type PropsLinhaLivro = {
  livro: Livro;
  acervo: ControleLivro;
  carregando: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  livros: ControleLivro;
};

const LinhaLivro = ({ acervo, livro, carregando, index }: PropsLinhaLivro & { index: number }) => {
  const editora = new ControleEditora();

  return (
    <React.Fragment>
      <tr key={index}>
        <th scope="row">
          <p>{livro.titulo}</p>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => {
              acervo.excluir(livro.codigo).then(() => {
                carregando(false);
              });
            }}
          >
            Excluir
          </button>
        </th>
        <td>{livro.resumo}</td>
        <td>
          {editora.getNomeEditora(livro.codEditora).map((nomeEditora) => {
            return nomeEditora.nome;
          })}
        </td>
        <td>
          <ul>
            {livro.autores.map((nome) => {
              return <li key={nome}>{nome}</li>;
            })}
          </ul>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default function LivroLista({ livros }: Props) {
  const [meusLivros, setMeusLivros] = useState<Livro[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);

  useEffect(() => {
    livros.obterLivros().then((resultado) => {
      setMeusLivros(resultado);
      setCarregando(false);
    });
  }, []);

  return (
    <React.Fragment>
      <Menu />
      <main className="container">
        <h1>Catalogo de Livros</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Resumo</th>
              <th scope="col">Editora</th>
              <th scope="col">Autores</th>
            </tr>
          </thead>
          <tbody>
            {meusLivros.map((livro, index) => {
              return (
                <LinhaLivro
                  key={livro.codigo}
                  livro={livro}
                  carregando={setCarregando}
                  acervo={livros}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </main>
    </React.Fragment>
  );
}
