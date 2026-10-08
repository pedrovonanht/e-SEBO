import { Conta } from "./conta.ts";
import Livro from "./livro.ts";
import { Autor } from "./autor.ts";
import db from "./infra/database.ts";

interface vendaObj {
  cliente: Conta,
  livro: Livro,
}

export class Venda {
  private _cliente: Conta;
  private _livro: Livro;
  private _codigo: string;

  constructor({ cliente, livro }: vendaObj) {
    this._cliente = cliente;
    this._livro = livro;
    this._codigo = crypto.randomUUID();
  }
  public get cliente() {
    return this._cliente
  }
  public set cliente(valor){
    this._cliente = valor
  }
  public get livro() {
    return this._livro
  }
  public set livro(valor){
    this._livro = valor
  }
  public get codigo() {
    return this._codigo
  }
  public set codigo(valor){
    this._codigo = valor
  }

  public RealizarVenda() {
    db.prepare(`
      insert into Livros (titulo, genero, sinopse, lingua)
      values (?, ?, ?, ?)
      `).run(
        this.livro.nome,
        "ação",
        this.livro.descricao,
        "portugues"
      )

      const resposta = db.prepare(`
        SELECT * FROM livros`).all();

        console.log(resposta)
  }
}

const Autor1: Autor = new Autor({nome:"joão",})
const Autor2: Autor = new Autor({nome:"joão gabriel",})
const livro1: Livro = new Livro({nome:"pedro", autores:[Autor1], descricao:"qualqeu coisa"})
const conta1: Conta = new Conta({nome: "gabriel", cpf:"1111111111", telefone:"5312121212",})
const Venda1: Venda = new Venda({cliente:conta1, livro:livro1})

livro1.adicionaAutor(Autor2)
console.log(livro1)

Venda1.RealizarVenda()