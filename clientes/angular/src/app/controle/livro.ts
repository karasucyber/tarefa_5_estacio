export class Livro {
    public _id : string | null;
    public codEditora: number
    public titulo: string
    public resumo: string
    public autores: string[]
    
    constructor(codigo: string |null, codEditora: number = 0, titulo: string = "", resumo: string = "", autores: string[] = []) {
      this._id = codigo 
      this.codEditora = codEditora
      this.titulo = titulo
      this.resumo = resumo
      this.autores = autores 
    }
}
