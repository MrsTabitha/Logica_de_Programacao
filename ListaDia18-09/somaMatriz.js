//Somar valores positivos de uma matriz. Dado um vetor de vetors com números inteiros (incluindo negativos), use `reduce` para somar apenas os números positivos.

const prompt = require('prompt-sync')();

let matriz = [
    [1, -2, 3],
    [-4, 5, -6],
    [7, -8, 9]
];

// "Achatando" a matriz para um único vetor e somando apenas os valores positivos
let somaPositivos = matriz.flat().reduce((soma, valor) => {
    return valor > 0 ? soma + valor : soma;
}, 0);

console.log(`A soma dos valores positivos é: ${somaPositivos}.`);