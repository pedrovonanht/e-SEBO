import PromptSync from "prompt-sync";
import fs from "node:fs";
import { Conta } from "../conta.ts";

const prompt = PromptSync({ sigint: true });

function login(userConfigs: Conta[]): Conta[] {
  console.log("------Login-----");
  const nome: string = prompt("Nome da conta: ");
  const cpf: number = +prompt("CPF: ");
  const telefone: number = +prompt("Telefone: ");
  const userAcount: Conta = new Conta({ nome, cpf, telefone });

  // const text: string = nome + "\n" + cpf + "\n" + telefone + "\n";

  userConfigs.push(userAcount);
  fs.writeFileSync(
    "./src/db.json",
    JSON.stringify(userConfigs, null, 2),
    "utf-8",
  );
  return userConfigs;
}

export default function criarConta() {
  const loadedConfigs: string = fs.readFileSync("./src/db.json", "utf-8");
  let userConfigs: Conta[];

  if (loadedConfigs.length == 0) {
    userConfigs = login([]);
  } else if (loadedConfigs.length > 0) {
    userConfigs = JSON.parse(loadedConfigs);
    
    
    const resposta: string = prompt(
      `Detectamos ${userConfigs.length} conta(s) salvas. Você quer seguir com alguma delas? (S/N) `,
    ).toLocaleLowerCase();

    if (resposta == "n") {
      login(userConfigs);
      return;
    }

    let index: number = 0;
    for (let conta of userConfigs) {
      index += 1;
      console.log(`${index} - ${conta.nome}`);
    }

    const contaEscolhida = prompt("Qual conta você quer usar? ")!;

    const indice: number = +contaEscolhida - 1;

    if (!userConfigs[indice]) {
      return;
    }
    return new Conta(userConfigs[indice]);
  }
}

