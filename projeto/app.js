const livros = [
    {
        id: 1,
        nome: "Digital Minimalism",
        autor: "Cal Newport",
        categoria: "Produtividade",
        paginas: 254,
        recomenda: false,
        leu: false
    },
    {
        id: 2,
        nome: "O genocídio do negro brasileiro",
        autor: "Abdias do Nascimento",
        categoria: "História Brasileira",
        paginas: 254,
        recomenda: false,
        leu: false
    },
    {
        id: 3,
        nome: "Harry Potter",
        autor: "J. K. Rolling",
        categoria: "Ficção",
        paginas: 520,
        recomenda: true,
        leu: true
    },
    {
        id: 4,
        nome: "Magisterium",
        autor: "Holly Black & Cassandra Clare",
        categoria: "Ficção",
        paginas: 238,
        recomenda: true,
        leu: true
    },
    {
        id: 5,
        nome: "Thinking Fast and Slot",
        autor: "Daniel Kahneman",
        categoria: "Estilo de vida",
        paginas: 418,
        recomenda: true,
        leu: true
    },    
    {
        id: 6,
        nome: "Padrões Javascript",
        autor: "Stoyan Stefanov",
        categoria: "Tecnologia",
        paginas: 231,
        recomenda: true,
        leu: true
    }
]
//const livros = require('./database') *como não está funcionando coloquei a database junto.
//pegar um input
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')
if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log("Essas são as categorias disponíveis:")
    console.log('Produtividade', '/História Brasileira', '/Ficção', '/Estilo de vida', '/Tecnologia')

    const entradaCategoria = readline.question("Qual categoria você escolhe: ")
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}else{
    const ordemCrescente = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log("Esses são todos livros disponíveis:")
    console.table(ordemCrescente)
}