//Crie um vetor de cinco números inteiros. Calcule e exiba a soma de todos os números.

const prompt = require('prompt-sync')();

const numeros = [10, 20, 30, 40, 50];

let soma = 0

for (let numero of numeros) {
    soma  = soma + numero;
}

console.log(`Soma dos números é: ${soma}`);
