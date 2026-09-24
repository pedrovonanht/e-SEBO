import Database from "better-sqlite3";

const db: Database.Database = new Database(`${process.cwd()}/src/infra/system.db`);
db.pragma("foreign_keys = ON");


//revisar criação das tabelas; TO BE DONE
db.exec(`
    CREATE TABLE IF NOT EXISTS Endereco (
        idEndereco INTEGER PRIMARY KEY AUTOINCREMENT,
        logradouro VARCHAR(45),
        numero VARCHAR(45),
        cep VARCHAR(45),
        complemento VARCHAR(45)
    );

    CREATE TABLE IF NOT EXISTS Conta (
        idUser INTEGER PRIMARY KEY AUTOINCREMENT,
        nomeUsuario VARCHAR(45),
        senha VARCHAR(45),
        cpf CHAR(11),
        telefone VARCHAR(45),
        Endereco_idEndereco INTEGER,

        FOREIGN KEY (Endereco_idEndereco)
            REFERENCES Endereco(idEndereco)
    );

    CREATE TABLE IF NOT EXISTS Livro (
        idLivro INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo VARCHAR(45),
        genero VARCHAR(45),
        sinopse VARCHAR(120),
        lingua VARCHAR(45)
    );

    CREATE TABLE IF NOT EXISTS Autor (
        idAutor INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(45),
        nascimento DATE,
        nacionalidade VARCHAR(45)
    );

    CREATE TABLE IF NOT EXISTS Livro_has_Autor (
        Livro_idLivro INTEGER NOT NULL,
        Autor_idAutor INTEGER NOT NULL,

        PRIMARY KEY (Livro_idLivro, Autor_idAutor),

        FOREIGN KEY (Livro_idLivro)
            REFERENCES Livro(idLivro),

        FOREIGN KEY (Autor_idAutor)
            REFERENCES Autor(idAutor)
    );

    CREATE TABLE IF NOT EXISTS Anuncio (
        idAnuncio INTEGER PRIMARY KEY AUTOINCREMENT,
        Livro_idLivro INTEGER NOT NULL,
        Vendedor INTEGER NOT NULL,
        condicaoLivro VARCHAR(45),
        preco INTEGER,
        desconto INTEGER,
        ativo INTEGER,
        vendido INTEGER,

        FOREIGN KEY (Livro_idLivro)
            REFERENCES Livro(idLivro),

        FOREIGN KEY (Vendedor)
            REFERENCES Conta(idUser)
    );

    CREATE TABLE IF NOT EXISTS Venda (
        idVenda INTEGER PRIMARY KEY AUTOINCREMENT,
        Anuncio_idAnuncio INTEGER NOT NULL,
        Comprador INTEGER NOT NULL,

        FOREIGN KEY (Anuncio_idAnuncio)
            REFERENCES Anuncio(idAnuncio),

        FOREIGN KEY (Comprador)
            REFERENCES Conta(idUser)
    );
`);

export default db;