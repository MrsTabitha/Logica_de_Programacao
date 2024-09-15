//Faça um programa para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido, escreva uma mensagem que indica se cada valor é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor ZERO ou NEGATIVO.

const prompt = require("prompt-sync")(); 

let num;

do{
    num = Number(prompt("Informe um número: "));

    if(num <= 0){
        console.log("Programa encerrado.");
        break;
    }

    if(num % 2 == 0){
        console.log("O número informado é PAR.");
    }else{
        console.log("O número informado é ÍMPAR.");
    }
    
}while(true)