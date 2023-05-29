const massa = document.getElementById('massa');

var listaRespostas = [
    {
        pergunta: 1,
        resposta: "massa"
    },
    "rom",
    "flash",
    "cpu"
]

function validar(resposta, pergunta){
    for(let i = 0; i < listaRespostas.length; i++){
        if(resposta == listaRespostas[i]){
            massa.style.borderColor = "green";
            massa.style.color = "green";
            return;
        }
    }
    massa.style.borderColor = "red";
    massa.style.color = "red";
}