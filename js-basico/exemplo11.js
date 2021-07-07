//Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.
var meuimc = iMC(90, 1.75);
function iMC(peso, altura){
    console.log(peso/Math.pow(altura, 2));
}