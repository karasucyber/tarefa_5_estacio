import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    {
      codEditora: 1,
      nome: 'palavras não faladas',
  },
  {
      codEditora: 2,
      nome: 'escritas não lidas',
  },
  {
      codEditora: 3,
      nome: 'palavras não ouvidas',
  }
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

