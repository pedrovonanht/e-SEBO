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
    desconto: number
    qualidade: string
    ativo: boolean


   

    private static anuncios:Anuncio[] = [];
    constructor ({dono, livro, preco, qualidade, ativo}:anuncioObj){
        this.validaPreco(preco)
        this.dono = dono,
        this.livro = livro,
        this.preco = preco,
        this.qualidade = qualidade,
        this.ativo = ativo || true,
        this.desconto = 0
        Anuncio.anuncios.push(this);
    }


    static listarAnuncios():Anuncio[] {
        return this.anuncios;
    }

    static limparListaAnuncios():void {
        Anuncio.anuncios=[];
    }

    validaPreco(preco:number):void{
        if(preco < 0){
            throw new Error("Preço inválido")
        }
    }

    aplicarDesconto({porcentagemDesconto}:{porcentagemDesconto: number}):void {
        this.desconto = porcentagemDesconto;
    }

    precoVenda():number {
        return this.preco*((100-this.desconto)/100)
    }
    
    desativaAnuncio():void{
        this.ativo=false;
    }

}