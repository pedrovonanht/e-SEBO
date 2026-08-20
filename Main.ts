import PromptSync from "prompt-sync";
import Produto  from "./produto.ts";

const prompt = PromptSync({ sigint: true });

console.log("Olá edécio!")

const nome: string = "Edécio";

const p: Produto = new Produto();
p.preco = 80.00;
p.nome = "Senhor dos Aneis";
p.descricao = "Livro de Tokien"

while (true) {
    console.clear();
    console.log("Opção 0: Listar catálogo")
    console.log("Opção 1: Pesquisar livro")
    console.log("Opção 2: Pesquisar autor")
    console.log("Opção 3: Adicionar ao carrinho")
    console.log("Opção 4: Visualizar carrinho")
    console.log("Opção 5: Finalizar Compra")
    console.log("Opção 6: Sair do programa")

    const resposta: string = prompt("Sua escolha: ");
}




