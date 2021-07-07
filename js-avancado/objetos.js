const pessoa = {
    nome: "Thiago",
    sobrenome: "Oberle",
    idade: 31,
    cidade: "Londrina"
}
//notação ponto
console.log(pessoa.nome)

//notação colchetes
console.log(pessoa['idade'])

// Como desestruturar objetos
const { nome, sobrenome, idade, cidade } = pessoa
console.log(nome, sobrenome)