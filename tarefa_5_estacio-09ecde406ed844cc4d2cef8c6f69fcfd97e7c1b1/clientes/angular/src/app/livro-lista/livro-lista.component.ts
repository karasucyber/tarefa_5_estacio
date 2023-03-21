import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Editora} from '../controle/editora'
import {Livro} from '../controle/livro'
import { ControleEditoraService } from '../controle/controle-editora.service';
import { ControleLivrosService } from '../controle/controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit{
  servEditora: ControleEditoraService;
  servLivros: ControleLivrosService;

  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(servEditora: ControleEditoraService, servLivros: ControleLivrosService, router: Router) {
    this.servEditora = servEditora; 
    this.servLivros = servLivros;
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterlivros();
  }
  
  excluir = (codigo : number) : void => {
    this.servLivros.excluir(codigo)
    this.livros = this.servLivros.obterlivros()
  }
  
  obternome = (codeditora : number) : string => {
    return this.servEditora.getNomeEditora(codeditora)
  }
}
