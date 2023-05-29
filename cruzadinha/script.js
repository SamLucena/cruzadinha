const palavraDma = document.getElementsByClassName('dma');


var listaRespostas = [
    {
        pergunta: 1,
        resposta: "dma"
    },
    {
        pergunta: 2,
        resposta: "cache"
    },
    {
        pergunta: 3,
        resposta: "flash"
    },
    {
        pergunta: 4,
        resposta: "databus"
    },
    {
        pergunta: 5,
        resposta: "massa"
    },
    {
        pergunta: 6,
        resposta: "threads"
    },
    {
        pergunta: 7,
        resposta: "eprom"
    },
    {
        pergunta: 8,
        resposta: "cpu"
    },
    {
        pergunta: 9,
        resposta: "dualcore"
    },
    {
        pergunta: 10,
        resposta: "cs"
    },
    {
        pergunta: 11,
        resposta: "rom"
    },
    {
        pergunta: 12,
        resposta: "registradores"
    },
    {
        pergunta: 13,
        resposta: "ula"
    },
    {
        pergunta: 14,
        resposta: "ram"
    },
    
]

function validar(elemento, pergunta){
    var resposta = elemento.value;
    for(let i = 0; i < listaRespostas.length; i++){
        if(resposta.toLowerCase() == listaRespostas[i].resposta && pergunta == listaRespostas[i].pergunta){
            elemento.style.borderColor = "green";
            elemento.style.color = "green";
            elemento.disabled = true;
            window.location = "#cruzadinha";
            montarPalavra(resposta, pergunta);
            return;
        }
    }
    elemento.style.borderColor = "red";
    elemento.style.color = "red";
}


function montarPalavra(resposta, pergunta){
    if(pergunta == 1){
        console.log(palavraDma);
    }
}