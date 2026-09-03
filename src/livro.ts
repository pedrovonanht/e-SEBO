import { Autor } from "./autor.ts";

export default class Livro {
    //atributos
    nome: string;
    descricao: string;
    autores: Autor[];

    constructor ({nome, autores, descricao}: {
        nome: string,
        autores: Autor[],
        descricao: string 
    }  ) {
        this.nome = nome;
        this.descricao = descricao || "",
        this.autores = autores;
    }

    adicionaAutor(autor:Autor):void{
        this.autores.push(autor);
    }

}
