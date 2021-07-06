//Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?
let porCentoAtual = 0.6
let porCentoPretendido = 1.25;
let valorAtual = 300;
let valorVenda = valorAtual*porCentoPretendido/porCentoAtual;

console.log("O valor de venda é: " + valorVenda)