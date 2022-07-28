import fs from 'fs';
function TratarErros(err){
    throw new Error(chalk.redBright(err.code,'Não há arquivo no caminho'));
}
function extrairLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResult = [];
    let temp;
    while(((temp = regex.exec(texto)) !== null)){
        arrayResult.push({ [temp[1]]: temp[2]});
    }
    return arrayResult.length === 0 ? 'Não há links' : arrayResult;
}
export async function pegarArquivo(caminho){
    const encoding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminho, encoding);
        return extrairLinks(texto);
    }
    catch(err){
        TratarErros(err);
    }  
}

