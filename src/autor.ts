export class Autor {
    nome: string;
    nascimento: Date;

    constructor ({nome, nascimento} : {
        nome: string,
        nascimento?: Date
    }) {
        this.nome = nome;
        this.nascimento = nascimento || new Date(Date.now());
    }
} 