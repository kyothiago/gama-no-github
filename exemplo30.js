//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
function valorJantar(number){
    let taxaGarcom = number*0.1;
    console.log("Taxa do garçom: " + taxaGarcom)
    let total = number + taxaGarcom
    console.log("O total a ser pago é: " + total)
}

valorJantar(300)