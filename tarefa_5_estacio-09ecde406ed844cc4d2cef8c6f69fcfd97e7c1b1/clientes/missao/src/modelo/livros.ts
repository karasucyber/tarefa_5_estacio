
export class Livros {

   public codigo: string | null;
   public codEditora: number;
   public  titulo: string;
    public resumo: string;
   public autores: string[];

    constructor( codigo:string| null,titulo: string,resumo: string,autores: string[] 
,codEditora:number)
        
         {

        this.codigo = codigo;
        
        this.titulo = titulo;
        
        this.resumo = resumo;

        this.autores = autores;

        this.codEditora = codEditora;

    }

}