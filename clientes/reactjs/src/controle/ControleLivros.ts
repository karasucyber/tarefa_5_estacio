import { Livro } from "../modelo/Livro";

export class ControleLivro {
   livros = [
    {
      codigo: 1,
      codEditora: 2,
      titulo: "Código limpo: Habilidades práticas do Agile Software",
      autores: ["Robert C. Martin",],
      resumo: "Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim.O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo:",
  },
  {
      codigo: 2,
      codEditora: 1,
      titulo: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
      autores: ["eric Evans",],
      resumo: "Software design thought leader and founder of Domain Language, Eric Evans, provides a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques, and fundamental principles that facilitate the development of software projects facing complex domains. Intertwining system design and development practice, this book incorporates numerous examples based on actual projects to illustrate the application of domain-driven design to real-world software modeling and development.",
  },
  {
      codigo: 3,
      codEditora: 1,
      titulo: "Design Patterns: Elements of Reusable Object-Oriented Software",
      autores: ["Erich gamma", "richard helm",],
      resumo: "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.",
  },
  ];



  async obterLivros(): Promise<Livro[]> {
    const response = await fetch('suaURLBase', { method: 'GET' });
    const livrosJSON = await response.json();
    const livros = livrosJSON.map((livroJSON: { codigo: string | number; codEditora: number; titulo: string; resumo: string; autores: string[]; }) => new Livro(livroJSON));
    return livros;
  }


      incluir = async (livros: Livro) =>{
    const url = 'http://localhost:3030/livros';
    const body = JSON.stringify(livros);
    const headers = {
      'Content-Type': 'application/json'
    };
    const response = await fetch(url, { method: 'POST', body, headers });
    const { ok } = await response.json();
    return ok;
  }

  async excluir(codEditora: number) {
    const response = await fetch(`baseURL/${"http://localhost:3030/livros"}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    if (response.ok) {
      const index = this.livros.findIndex((livro) => livro.codigo === codEditora);
      if (index !== -1) {
        this.livros.splice(index, 1);
      }
      return data; // ou uma mensagem de sucesso
    } else {
      throw new Error(data.message); // ou uma mensagem de erro
    }
}
}
const baseURL=("http://localhost:3030/livros")

interface LivroMongo{
  id_: string|null,
  codEditora: number,
  titulo:string,
  resumo: string,
  autores: string,
}

 