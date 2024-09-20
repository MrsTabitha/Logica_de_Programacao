//Crie um vetor de números inteiros. Crie um novo vetor contendo apenas os números pares.

const prompt = require('prompt-sync')();

const numeros = [1,2,3,4,5,6,7,8,9,10];

console.log(`Vetor: ${numeros}`);

const pares = numeros.filter(num => num % 2 === 0);

console.log(`Números Pares do Vetor: ${pares}`)