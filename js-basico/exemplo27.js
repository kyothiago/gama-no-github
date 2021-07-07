//Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs
//a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
//b) Deverá ser possível passar 2 números para a operação escolhida
//c) Deverá retornar o resultado e imprimir no console
function calculador(operacao, num1, num2){
    if(operacao === 'soma'){
        console.log(num1 + num2)
    }
    if(operacao === 'multiplicação'){
        console.log(num1*num2)
    }
    if(operacao === 'divisão'){
        console.log(num2/num1)
    }
    if(operacao === 'subtração'){
        console.log(num1 - num2)
    }
}
