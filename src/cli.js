import { pegarArquivo } from "./main.js";
import { validaLink } from "./validacao.js";
// import chalk from "chalk";


const caminho = process.argv;
async function processaTexto(caminhoArquivo){
    const result = await pegarArquivo(caminhoArquivo[2]);
    (caminho[3] === "validar") ? 
    console.log(("Links Validados"), await validaLink(result)) : 
    console.log(("Links não validados"), result);


}
processaTexto(caminho);