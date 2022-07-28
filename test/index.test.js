import { pegarArquivo } from "../src/main.js";

const arrayResult =[
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
  }
]

describe('pegarArquivo::',()=>{
  it('Deve ser uma função',()=>{
    expect(typeof pegarArquivo).toBe('function');
  });
  it('Deve retornar array com resultados', async()=>{
    const result = await pegarArquivo("/Users/ericklucascostadonascimento/Desktop/Projetos/nodejs/test/arquivos/texto1.md");
    expect(result).toEqual(arrayResult);
  });
  it('deve retornar mennsagem "Não há links"', async() =>{
    const result = await pegarArquivo('/Users/ericklucascostadonascimento/Desktop/Projetos/nodejs/test/arquivos/texto2.md');
    expect(result).toBe('Não há links');
  })
})

