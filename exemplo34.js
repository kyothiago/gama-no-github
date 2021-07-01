//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
//Se a media for igual ou maior que 7 - Aprovado
//Se a media for maior e igual a cinco e menor que 7 - Recuperação
//Se a media for menor que 5 - Reprovado|

function calculoMedia(nota1, nota2, nota3){
    let total = nota1 + nota2 + nota3;
    let media = total/3;
    if(media < 5){
        return "Reprovado";
    }
    if(media < 7){
        return "Recuperação";
    }
    else
        return "Aprovado";
    
}
console.log(calculoMedia(6,4,5))