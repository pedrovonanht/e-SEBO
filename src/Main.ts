import PromptSync from "prompt-sync";
import Livro  from "./livro.ts";
import {Anuncio}  from "./anuncios.ts";
import fs from 'node:fs';
import {Conta}  from "./conta.ts";
import { Autor } from "./autor.ts";

const prompt = PromptSync({ sigint: true });


const nome: string = "Edécio";


const anuncios: Anuncio[] = []

function anunciar() {
    const titulo: string = prompt("Título: ")
    const autor: string = prompt("Autor(a): ")
    const descricao: string = prompt("Descrição: ")
    const autores:Autor[] = [autor]
    
    const l: Livro = new Livro({nome: titulo, autores:autores, descricao})
    const anuncio: Anuncio = new Anuncio({livro:l, dono: userAcount, preco: 89, qualidade:"Excelente"})
    anuncios.push(anuncio)
}


function listar() {
    anuncios.map((anuncio) => console.log(`${anuncio} \n ---`))
    prompt("Digite algo para sair: ")
}

let userAcount:Conta;
function criarConta () {

const loadedConfigs:string = fs.readFileSync("./src/db_temporario", "utf-8")
console.log(loadedConfigs)
if(loadedConfigs.length == 0){
const nome:string = prompt("Nome da conta: ")
const cpf:number = +prompt("CPF: ")
const telefone:number = +prompt("Telefone: ")
userAcount = new Conta({nome, cpf, telefone})
const text:string = nome+"\n"+cpf+"\n"+telefone+"\n"
fs.writeFileSync("./src/db_temporario", text)
} else if (loadedConfigs.length == 3) {
    const userConfigs:string[] = loadedConfigs.split("\n")
    userAcount = new Conta({nome:userConfigs[0]||"", cpf:userConfigs[1]||"", telefone:userConfigs[2]||""})
    
}

}
criarConta();
let MenuChoice: number = +prompt("Se você quer acessar o menu de comprador digite 1 senão digite 2.");
while (true) {
    if(MenuChoice==1) {
    console.clear();
    console.log("Vendedor")
    console.log("Opção 0: Listar catálogo")
    console.log("Opção 1: Pesquisar livro")
    console.log("Opção 2: Pesquisar autor")
    console.log("Opção 3: Adicionar ao carrinho")
    console.log("Opção 4: Visualizar carrinho")
    console.log("Opção 5: Finalizar Compra")
    console.log("Opção 6: Voltar")
    console.log("Opção 9: Sair do programa")

    const resposta: number = +prompt("Sua escolha: ");
    if (resposta == 9) {
        break
    }
    if (resposta == 6) {
        console.clear
        MenuChoice = +prompt("Se você quer acessar o menu de comprador digite 1 senão digite 2.");
    }
}
if (MenuChoice == 2) {
     console.clear();
    console.log("Vendedor")
    console.log("Escolha uma opção")
    console.log("Opção 0: Meus anúncios")
    console.log("Opção 1: Anunciar livros")
    console.log("Opção 2: Atualizar anúncios")
    console.log("Opção 3: Excluir anúncio")
    console.log("Opção 4: Pedidos")
    console.log("Opção 5: Mensagens")
    console.log("Opção 6: Meu perfil")
    console.log("Opção 7: Voltar")
    console.log("Opção 8: Sair do programa")

    const resposta: number = +prompt("Sua escolha: ");
    if (resposta == 8) {
        break
    }
    if (resposta == 7) {
        console.clear
        MenuChoice = +prompt("Se você quer acessar o menu de comprador digite 1 senão digite 2.");
    }
    if (resposta == 1) {
        anunciar();
    }
    if (resposta == 0) {
        listar();
    }
}
}