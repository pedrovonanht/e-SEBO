import { Conta } from "./conta.ts";
import Livro from "./livro.ts";

interface vendaObj {
    cliente: Conta,
    livro: Livro,
}

export class Venda {
  cliente: Conta;
  livro: Livro;
  codigo: string;
  
  constructor ({cliente, livro}:vendaObj) {
    this.cliente= cliente;
    this.livro= livro;
    this.codigo= crypto.randomUUID();
  }
}
