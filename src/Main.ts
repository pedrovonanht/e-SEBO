import PromptSync from "prompt-sync";
import Livro from "./livro.ts";
import { Anuncio } from "./anuncios.ts";
import fs from "node:fs";
import { Conta } from "./conta.ts";
import { Autor } from "./autor.ts";
import criarConta from "./modules/criarConta.ts";

const prompt = PromptSync({ sigint: true });

const nome: string = "Edécio";


function anunciar() {
  const titulo: string = prompt("Título: ");
  let autores: Autor[] = [];
  while (true) {
    const autorNome: string = prompt("Autor(a): ");
    const autor: Autor = new Autor({ nome: autorNome });
    autores.push(autor);
    const resposta: string = prompt(
      "Quer adicionar mais algum autor? (S/N) ",
    ).toLocaleLowerCase();
    if (resposta == "n") {
      break;
    }
  }
  const descricao: string = prompt("Descrição: ");

  const l: Livro = new Livro({ nome: titulo, autores: autores, descricao });
  const anuncio: Anuncio = new Anuncio({
    livro: l,
    dono: userAcount,
    preco: 89,
    qualidade: "Excelente",
  });

}

function listar() {
  console.log(
    "Pos.|                Livros            |            Autores            | Preço | Qualidade |",
  );

  let contador = 0;


  const anuncios = Anuncio.listarAnuncios();
  for (let i = 0; i < anuncios.length; i++) {
    contador++;

    let stringAutores: string = "";
    for (let index = 0; index < anuncios[i]!.livro.autores.length; index++) {
      if (index == 0) {
        stringAutores += `${anuncios[i]?.livro.autores[index]?.nome}`;
      } else {
        stringAutores += `, ${anuncios[i]?.livro.autores[index]?.nome}`;
      }
    }

    let valor = `R$ ${anuncios[i]?.preco}`

    console.log(
      `${String(contador).padStart(4)}|${anuncios[i]?.livro.nome.padEnd(34)}| ${stringAutores.padEnd(30)}|${valor.padStart(7)}|${anuncios[i]?.qualidade.padStart(11)}|`,
    );
  }

  /* anuncios.map((anuncio) => console.log(`${JSON.stringify(anuncio, null, 2)} \n ---`)) */
  prompt("Digite algo para sair: ");
}

function desativa() {
  const anuncios:Anuncio[] = Anuncio.listarAnuncios(); 
  anuncios.map((anuncio, indice) => {
    console.log(`${indice} - ${JSON.stringify(anuncio.livro)}`);
  });
  const resposta: number = +prompt("Você quer desativar qual anuncio seu? ");
  anuncios[resposta]?.desativaAnuncio();
}




let userAcount:Conta = criarConta()!;

let MenuChoice: number = +prompt(
  "Se você quer acessar o menu de comprador digite 1 senão digite 2. ",
);

while (true) {
  if (MenuChoice == 1) {
    console.clear();
    console.log("Vendedor");
    console.log("Opção 0: Listar catálogo");
    console.log("Opção 1: Pesquisar livro");
    console.log("Opção 2: Pesquisar autor");
    console.log("Opção 3: Adicionar ao carrinho");
    console.log("Opção 4: Visualizar carrinho");
    console.log("Opção 5: Finalizar Compra");
    console.log("Opção 6: Voltar");
    console.log("Opção 9: Sair do programa");

    const resposta: number = +prompt("Sua escolha: ");
    if (resposta == 9) {
      break;
    }
    if (resposta == 6) {
      console.clear;
      MenuChoice = +prompt(
        "Se você quer acessar o menu de comprador digite 1 senão digite 2.",
      );
    }
  }
  if (MenuChoice == 2) {
    console.clear();
    console.log("Vendedor");
    console.log("Escolha uma opção");
    console.log("Opção 0: Meus anúncios");
    console.log("Opção 1: Anunciar livros");
    console.log("Opção 2: Atualizar anúncios");
    console.log("Opção 3: Desativar anúncio");
    console.log("Opção 4: Pedidos");
    console.log("Opção 5: Mensagens");
    console.log("Opção 6: Meu perfil");
    console.log("Opção 7: Voltar");
    console.log("Opção 8: Sair do programa");

    const resposta: number = +prompt("Sua escolha: ");
    if (resposta == 0) {
      listar();
    }
    if (resposta == 1) {
        anunciar();
    }
    if (resposta == 3) {
        desativa();
    }
    if (resposta == 7) {
        console.clear;
        MenuChoice = +prompt(
            "Se você quer acessar o menu de comprador digite 1 senão digite 2.",
        );
    }
    if (resposta == 8) {
      break;
    }
}
}
