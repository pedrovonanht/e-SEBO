import { Conta } from "./conta.ts"
import Livro from "./livro.ts"

interface anuncioObj {
    dono: Conta,
    livro: Livro,
    preco: number,
    qualidade: string
}

export class Anuncio {
    dono: Conta
    livro: Livro
    preco: number
    qualidade: string

    constructor ({dono, livro, preco, qualidade}:anuncioObj){
        this.dono = dono,
        this.livro = livro,
        this.preco = preco,
        this.qualidade = qualidade
    }
}