import fetch from "node-fetch";

function FindError(error){
    throw new Error(error.mesage);
}

async function StatusCode(array){
    try{
        const statusCode = await Promise
        .all(array
            .map(async (url)=>{
                const res = await fetch(url);
                return res.status;
        }));
        return statusCode;
    }
    catch{
        FindError();
    }
}

function gerarArrayUrls(links){
    return links
    .map((objetolink)=>{return Object
        .values(objetolink)
        .join()});
}
export async function validaLink(LinksArray){
    const linksStatus = await StatusCode(gerarArrayUrls(LinksArray));
    const resultados = LinksArray.map((objeto, index) => 
        ({
            ...objeto,
            status: linksStatus[index]
        })
    )
    return resultados;
}