//Crie uma matriz 3x3 (3 linhas e 3 colunas) preenchida com números de 1 a 9. Exiba o número na segunda linha e terceira coluna.

const prompt = require('prompt-sync')();

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[1][2]);