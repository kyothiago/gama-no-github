//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".
function ehMaior(num1, num2){
    if(num1 < num2){
        console.log(num2)
    }
    if(num2 < num1){
        console.log(num1)
    }
    if(num1 === num2){
        console.log("Os números são iguais.")
    }
}

ehMaior(10, 5);