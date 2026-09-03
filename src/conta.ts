export class Conta {
    nome: string;
    cpf: string | number; 
    telefone: string | number;
    endereco: string;

    constructor ({nome, cpf, telefone, endereco} : {
        nome: string,
        cpf: string | number,
        telefone: string | number,
        endereco?: string
    }) {
        this.nome = nome;
        this.cpf = String(cpf);
        this.telefone = String(telefone);
        this.endereco = endereco || ""
    }
}