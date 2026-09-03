import { Conta } from "./conta.ts"
import Livro from "./livro.ts"

interface anuncioObj {
    dono: Conta,
    livro: Livro,
    preco: number,
    qualidade: string,
    ativo?: boolean,
}

export class Anuncio {
    dono: Conta
    livro: Livro
    preco: number
    qualidade: string
    ativo: boolean

    constructor ({dono, livro, preco, qualidade, ativo}:anuncioObj){
        this.validaPreco(preco)
        this.dono = dono,
        this.livro = livro,
        this.preco = preco,
        this.qualidade = qualidade,
        this.ativo = ativo || true
    }

    validaPreco(preco:number):void{
        if(preco < 0){
            throw new Error("Preço inválido")
        }
    }

    desativaAnuncio():void{
        this.ativo=false;
    }

}