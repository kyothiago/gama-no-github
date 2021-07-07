/*Vamos criar uma conta bancária com as 3 operações básicas? rs
a) A conta deverá iniciar com o saldo de 100
b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
c) Deverá ser possível passar 1 valor para a operação escolhida
d) Deverá retornar o resultado e imprimir no console o saldo atual|*/

var saldo = 100;
var operacao = 'consultar saldo'
var saldoAtual = 0;
var valor = 100
if(operacao === 'depositar'){
    saldoAtual = saldo + valor;
}
if(operacao === 'sacar'){
    saldoAtual = saldo - valor;
}
if(operacao === 'consultar saldo'){
    saldoAtual = saldo
}

console.log(saldoAtual)