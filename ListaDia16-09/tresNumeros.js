//Crie um vetor com três números. Adicione um número ao final do vetor, remova o primeiro número e exiba o vetor resultante.

const prompt = require('prompt-sync')();

const numeros = [0, 1, 2];

numeros.push(3);

console.log(numeros);

numeros.shift(0);

console.log(numeros);