export class Autor {
    private _nome: string;
    private _nascimento: Date;

    constructor({ nome, nascimento }: {
        nome: string,
        nascimento?: Date
    }) {
        this._nascimento = nascimento || new Date(Date.now());
        this._nome = nome;
    }
    public get nome(): string {
        return this.nome;
    }

    public set nome(nome: string) {
        if (nome.length >= 3 && nome.length <= 80) {
            this.nome = nome;
        } else throw new Error('O nome deve ter entre 3 e 80 caracteres');
    }

    public get nascimento(): Date {
        return this.nascimento;
    }

    // esse set não faz nada (ainda)
    public set nascimento(nascimento: Date) {
        this.nascimento = nascimento;
    }
}