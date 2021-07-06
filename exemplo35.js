function ehMaiorIdade(anoNascimento){
    let data = new Date;
    let anoAtual = data.getFullYear();
    if(anoAtual - anoNascimento >= 18){
        return "é Maior de Idade";
    }
    return "é Menor de Idade";
}
console.log(ehMaiorIdade(2010))