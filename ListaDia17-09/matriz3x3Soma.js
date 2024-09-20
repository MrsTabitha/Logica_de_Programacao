//Crie uma matriz 3x3, calcule a soma de todos os seus elementos.

const prompt = require('prompt-sync')();

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let soma = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        soma += matriz[i][j];
    }
}

console.log("Matriz:");
console.table(matriz); // Exibe a matriz em formato de tabela
console.log(`A soma de todos os elementos da matriz é: ${soma}`);
