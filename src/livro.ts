import { Autor } from "./autor.ts";

export default class Livro {
    //atributos
    private _nome: string;
    private _descricao: string;
    private _autores: Autor[];

    constructor ({nome, autores, descricao}: {
        nome: string,
        autores: Autor[],
        descricao: string 
    }  ) {
        this._nome = nome;
        this._descricao = descricao || "",
        this._autores = autores;
    }

    public get nome() {
        return this._nome;
    }

    public get descricao () {
        return this._descricao;
    }

    public get autores() {
        return this._autores;
    }

    adicionaAutor(autor:Autor):void{
        this.autores.push(autor);
    }

}
