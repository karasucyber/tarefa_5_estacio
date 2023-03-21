export class Livro {
  _id: string | number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(
{ codigo, codEditora, titulo, resumo, autores }: { codigo: string | number; codEditora: number; titulo: string; resumo: string; autores: string[]; }  ) {
    this._id = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}
