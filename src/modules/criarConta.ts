import PromptSync from "prompt-sync";
import fs from "node:fs";
import { Conta } from "../conta.ts";

const prompt = PromptSync({ sigint: true });

export default function criarConta() {
  const loadedConfigs: string = fs.readFileSync("./src/db_temporario", "utf-8");
  const userConfigs: string[] = loadedConfigs
    .split("\n")
    .filter((item) => item != "");

  function login() {
    console.log("------Login-----");
    const nome: string = prompt("Nome da conta: ");
    const cpf: number = +prompt("CPF: ");
    const telefone: number = +prompt("Telefone: ");
    const userAcount: Conta = new Conta({ nome, cpf, telefone });
    const text: string = nome + "\n" + cpf + "\n" + telefone + "\n";
    fs.writeFileSync("./src/db_temporario", text);
  }

  if (loadedConfigs.length == 0) {
    login();
  } else if (userConfigs.length >= 3) {
    const resposta: string = prompt(
      `Detectamos ${userConfigs.length / 3} conta(s) salvas. Você quer seguir com alguma delas? (S/N) `,
    ).toLocaleLowerCase();

    if (resposta == "n") {
      login();
      return;
    }

    for (let i = 0; i < userConfigs.length; i += 3) {
      console.log(`${Math.floor(i / 3)} - ${userConfigs[i]}`);
    }

    const contaEscolhida: number = +prompt("Qual conta você quer usar? ");

    return new Conta({
      nome: userConfigs[contaEscolhida * 3] || "",
      cpf: userConfigs[contaEscolhida * 3 + 1] || "",
      telefone: userConfigs[contaEscolhida * 3 + 2] || "",
    });
  }
}

criarConta()