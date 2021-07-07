const alunasGama = ["Maria", "Paula", "Julia", "Estela"]
//Acessar informação de array.
//console.log(alunasGama[3])

//Operador Spread (...)
const alunasXp = [...alunasGama, "Simara"]
//console.log(alunasXp)

//Métodos de Iteração
//Map
alunasXp.map(aluna => console.log(aluna))

//Filter
const numeros = [34, 45, 67, 75, 90]
const numerosImpares = numeros.filter(numero => numero%2 != 0)
console.log(numerosImpares)
const numerosPares = numeros.filter(numero => numero%2 == 0)
console.log(numerosPares)

//Sort
const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)
const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a)
console.log(numerosOrdenadosDecrescente)

//Reduce - reduz o array a um resultado de uma operação matemática
const numbers = [ 1 , 34 , 35 ]
const soma = numbers.reduce((valorAnterior, valorAtual)=> {
    return valorAnterior + valorAtual}, 0)
console.log(soma)