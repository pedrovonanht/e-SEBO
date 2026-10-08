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
    private _dono: Conta
    private _livro: Livro
    private _preco: number
    private _desconto: number
    private _qualidade: string
    private _ativo: boolean


    private static anuncios:Anuncio[] = [];
   

    constructor ({dono, livro, preco, qualidade, ativo}:anuncioObj){
        this.validaPreco(preco)
        this._dono = dono,
        this._livro = livro,
        this._preco = preco,
        this._qualidade = qualidade,
        this._ativo = ativo || true,
        this._desconto = 0
        Anuncio.anuncios.push(this);
    }

    public get dono() {
        return this._dono
    }

    public get preco() {
        return this._preco
    }

    public set preco(preco: number) {
        this._preco = preco
    }
    
    public get livro() {
        return this._livro;
    }

    public get qualidade() {
        return this._qualidade;
    }

    public get desconto() {
        return this._desconto
    }

    public get ativo() {
        return this._ativo
    }

    public static listarAnuncios():Anuncio[] {
        return this.anuncios;
    }

    public static limparListaAnuncios():void {
        Anuncio.anuncios=[];
    }

    private validaPreco(preco:number):void{
        if(preco < 0){
            throw new Error("Preço inválido")
        }
    }

    public set desconto (desconto: number) {
        this._desconto = desconto
    }

    public aplicarDesconto({porcentagemDesconto}:{porcentagemDesconto: number}):void {
        this._desconto = porcentagemDesconto;
    } 

    public precoVenda():number {
        return this._preco*((100-this._desconto)/100)
    }
    
    public desativaAnuncio():void{
        this._ativo = false;
    }
}