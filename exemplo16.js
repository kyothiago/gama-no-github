//Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6

function fatorial(number){
    var resultado = number;
    for(let i = 1; i < number; i++){
        resultado *= i;
    }
    console.log(resultado)
}
fatorial(3) 