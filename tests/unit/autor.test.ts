import { describe, test, expect } from "@jest/globals";
import { Autor } from "../../src/autor.ts";

describe("Verificar Regras de nome", () => {
    test("Nomeando fora das regras", () => {


        const autor: Autor = new Autor({nome: "JO"})

        expect(() => {autor}).toThrow();
    })
})
