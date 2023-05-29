const massa = document.getElementById('massa');

var listaRespostas = [
    {
        pergunta: 1,
        resposta: "massa"
    },
    {
        pergunta: 2,
        resposta: "rom"
    },
    {
        pergunta: 3,
        resposta: "flash"
    },
    {
        pergunta: 4,
        resposta: "cpu"
    },
]

function validar(elemento, pergunta){
    var resposta = elemento.value;
    for(let i = 0; i < listaRespostas.length; i++){
        if(resposta.toLowerCase() == listaRespostas[i].resposta && pergunta == listaRespostas[i].pergunta){
            elemento.style.borderColor = "green";
            elemento.style.color = "green";
            elemento.disabled = true;
            return;
        }
    }
    elemento.style.borderColor = "red";
    elemento.style.color = "red";
}