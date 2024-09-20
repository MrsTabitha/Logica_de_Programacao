//Crie um vetor de números, crie um novo vetor com os elementos na ordem inversa.

const prompt = require('prompt-sync')();

const numeros = [1,2,3,4,5,6,7,8,9,10];

console.log(`Vetor: ${numeros}`)

const inverso = numeros.reverse()

console.log(`Vetor na ordem inversa: ${inverso}`)