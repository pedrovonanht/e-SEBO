import { describe, test, expect } from "@jest/globals";
import Livro from "../../src/livro.ts";
import { Autor } from "../../src/autor.ts";

describe("Quando manipular um Livro", () => {
    test("Mudando nome diretamente", () => {

//setup
        const autor:Autor = new Autor({nome:"Tolkien"})
        const livro1:Livro = new Livro({nome:"Senhor dos pasteis", descricao: "Livro bom", autores:[autor]})
//action
//assertions (expects)
// @ts-ignore      
expect(() => {livro1.nome = "Jefferson"}).toThrow();
    })
})