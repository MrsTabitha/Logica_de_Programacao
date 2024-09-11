//Imprimir a Sequência de Fibonacci até o 10o Termo

const prompt = require('prompt-sync')();

let num1 = 0;
let num2 = 1;
let count = 10; // Definimos o número de termos que queremos

console.log(num1); // Primeiro termo da sequência
console.log(num2); // Segundo termo da sequência

while (count > 2) { // Já imprimimos os dois primeiros, então começamos em 8 iterações
    let nextNum = num1 + num2;
    console.log(nextNum);

    // Atualiza os valores
    num1 = num2;
    num2 = nextNum;

    count--;
}