import {describe, expect, test} from '@jest/globals';
import { Anuncio } from '../../src/anuncios.ts';
import { Conta } from '../../src/conta.ts';
import Livro from '../../src/livro.ts';
import { Autor } from '../../src/autor.ts';
 import {faker} from '@faker-js/faker'

function criarAnuncio({preco}:{preco?:number}) :Anuncio{
    const conta:Conta = new Conta({nome: faker.person.firstName(), cpf: "000111222333", telefone:faker.phone.number()})
    const autor:Autor = new Autor({nome: faker.book.author()})
    const livro:Livro = new Livro({nome:faker.book.title(), autores: [autor], descricao: faker.book.genre()}) 
    const anuncio: Anuncio = new Anuncio({dono: conta, livro, preco:preco||faker.number.int(), qualidade:"boa"})
    return anuncio;
}

describe('Quando manipular anuncio', () => {
  test('Aplicando desconto', () => {
    const conta:Conta = new Conta({nome: "roberto", cpf: "034574910040", telefone:"053991841961"})
    const autor:Autor = new Autor({nome: "Tolkien"})
    const livro:Livro = new Livro({nome:"Senhor dos pasteis", autores: [autor], descricao: "livro de fantasia sensacional"}) 
    const anuncio: Anuncio = new Anuncio({dono: conta, livro, preco:100, qualidade:"boa"})

    anuncio.desconto = 0;
    anuncio.aplicarDesconto({porcentagemDesconto: 10});

    expect(anuncio.preco).toBeGreaterThan(anuncio.precoVenda())
    expect(anuncio.precoVenda()).toBe(90)
});

    test('Listando anuncios', () =>{
        Anuncio.limparListaAnuncios();
        const anuncio1:Anuncio = criarAnuncio({})
        const anuncio2:Anuncio = criarAnuncio({})

        const anuncios = Anuncio.listarAnuncios()
        
        expect(anuncios.length > 0).toBe(true);
        expect(anuncios.length).toBe(2)

        expect(anuncios[0] instanceof Anuncio).toBe(true)
        expect(anuncios[1] instanceof Anuncio).toBe(true)
    });

    test("Verificando Preço", () => {
        const conta: Conta = new Conta({nome: "roberto", cpf: "034574910040", telefone:"053991841961"})
        const autor: Autor = new Autor({nome: "Tolkien"})
        const livro: Livro = new Livro({nome:"Senhor dos pasteis", autores: [autor], descricao: "livro de fantasia sensacional"}) 
      


        expect(() => new Anuncio({dono: conta, livro, preco:-10, qualidade:"boa"})).toThrow();
    })


});
