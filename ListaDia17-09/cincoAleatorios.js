//Crie um vetor de cinco números aleatórios. Ordene o vetor em ordem crescente e exiba o resultado.

const prompt = require('prompt-sync')();

const numeros = [3,9,7,1,0,4];

console.log(`Vetor Original: ${numeros}`);

numeros.sort((a, b) => a - b);

console.log(`Vetor Ordenado: ${numeros}`);