import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    {nome: "escreve.com", codEditora:1},
    
    {nome: "palavras não faladas", codEditora:2},
    
    {nome: "palavras não escritas", codEditora:3},
  ];

  constructor() { }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    for(let i=0; i<this.editoras.length; i++)
    if(codEditora==this.editoras[i].codEditora)
    return this.editoras[i].nome;
    return "";
  }
}

