//fizzbuzz
//divisivel por 3 => "Fizz"
//divisivel por 5 => "Buzz"
//divisivel por 3 e 5 => "FizzBuzz"
//Se não for um número => "Não é um número"
//Se não for divisível nem por 3 e por 5 => valor da Entrada

function fizzBuzz(entrada){
     if(typeof entrada !== "number"){
         return "Não é um número";
     }
     if((entrada % 3 === 0) && (entrada % 5 === 0)){
         return "FizzBuzz";
     }
     if(entrada % 3 === 0){
         return "Fizz";
     }
     if(entrada % 5 === 0){
         return "Buzz";
     }
     else{
         return entrada;
     }

}
let resultado = fizzBuzz(9)

let newStr = '';
function reverseAString(str){
    for(let i = str.length -1; i >=0; i-- ){
        newStr += str[i];
    }
    console.log(newStr);
}

function convertToFahrenheit(value){
    return value*9/5 +32;
}

let teste = convertToFahrenheit(5)
