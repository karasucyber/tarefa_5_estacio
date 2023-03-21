export class Livro {
  JSONlivros(JSONlivros: any) {
    throw new Error("Method not implemented.");
  }
  _id: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(
{ codigo, codEditora, titulo, resumo, autores }: { codigo: number; codEditora: number; titulo: string; resumo: string; autores: string[]; }  ) {
    this._id = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}
