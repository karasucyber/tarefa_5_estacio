import { Editora } from "../modelo/Editora";

export class ControleEditora {
  editoras: Editora[] = [
    {nome: "escreve.com", codEditora:1},
    
    {nome: "palavras não faladas", codEditora:2},
    
    {nome: "palavras não escritas", codEditora:3},
  ];

  getNomeEditora(cod: number) {
    return this.editoras.filter((editora) => { return editora.codEditora === cod })
  }

  getEditoras() {
    return this.editoras;
  }
}
