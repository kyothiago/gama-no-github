//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
//Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.
function divisor(num1, num2){
    console.log("A divisão entre o primeiro e segundo é: " + num1/num2)
    if(num1/num2 % 2 === 0){
        console.log("O número é par")
    }
}

divisor(4, 2)