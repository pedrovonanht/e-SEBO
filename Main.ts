import PromptSync from "prompt-sync";
import Produto  from "./produto.ts";

const prompt = PromptSync({ sigint: true });

console.log("Olá edécio!")

const nome: string = "Edécio";

const p: Produto = new Produto();
p.preco = 80.00;
p.nome = "Senhor dos Aneis";
p.descricao = "Livro de Tokien"

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
}
}




