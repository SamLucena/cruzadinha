var palavraDma = document.getElementsByClassName('dma');
var palavraCache = document.getElementsByClassName('cache');
var palavraFlash = document.getElementsByClassName('flash');
var palavraDatabus = document.getElementsByClassName('databus');
var palavraMassa = document.getElementsByClassName('massa');
var palavraThread = document.getElementsByClassName('threads');
var palavraEprom = document.getElementsByClassName('eprom');
var palavraCpu = document.getElementsByClassName('cpu');
var palavraDualcore = document.getElementsByClassName('dualcore');
var palavraCs = document.getElementsByClassName('cs');
var palavraRom = document.getElementsByClassName('rom');
var palavraRegistradores = document.getElementsByClassName('registradores');
var palavraUla = document.getElementsByClassName('ula');
var palavraRam = document.getElementsByClassName('ram')


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
            montarPalavra(pergunta);
            return;
        }
    }
    elemento.style.borderColor = "red";
    elemento.style.color = "red";
}


function montarPalavra(pergunta){
    if(pergunta == 1){
        mostrarPalavra(palavraDma);
    }else if (pergunta == 2) {
        mostrarPalavra(palavraCache);
    }else if(pergunta == 3){
        mostrarPalavra(palavraFlash);
    }else if(pergunta == 4){
        mostrarPalavra(palavraDatabus);
    }else if(pergunta == 5){
        mostrarPalavra(palavraMassa);
    }else if(pergunta == 6){
        mostrarPalavra(palavraThread);
    }else if(pergunta == 7){
        mostrarPalavra(palavraEprom);
    }else if(pergunta == 8){
        mostrarPalavra(palavraCpu);
    }else if(pergunta == 9){
        mostrarPalavra(palavraDualcore);
    }else if(pergunta == 10){
        mostrarPalavra(palavraCs);
    }else if(pergunta == 11){
        mostrarPalavra(palavraRom);
    }else if(pergunta == 12){
        mostrarPalavra(palavraRegistradores);
    }else if(pergunta == 13){
        mostrarPalavra(palavraUla);
    }else{
        mostrarPalavra(palavraRam);
    }
}

function mostrarPalavra(palavra){
    for(let i = 0; i < palavra.length; i++){
        palavra[i].style.opacity = '1';
    }
}