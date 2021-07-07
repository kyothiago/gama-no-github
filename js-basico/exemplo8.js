//Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.
var posicao = semaforo("vermelho");
console.log(posicao)

function semaforo(entrada){
    if(entrada == "vermelho"){
        return "O semáforo está vermelho!"
    }
    else if (entrada == "amarelo"){
        return "O semáforo está amarelo, tome cuidado!"
    }
    else if(entrada == "verde"){
        return "O semáforo está aberto, pode passar!"
    }
    return "Informar posição atual do semáforo."
}
