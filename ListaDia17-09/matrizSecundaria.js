//Crie uma matriz 3x3, onde os elementos da diagonal secundaria são 1 e o restante é 0.

const prompt = require('prompt-sync')();

const matriz = [];

// Preenchendo a matriz com 1s na diagonal secundária e 0s no restante
for (let i = 0; i < 3; i++) {
    matriz[i] = []; // Inicializa cada linha da matriz
    for (let j = 0; j < 3; j++) {
        if (i + j === 2) { // Condição para estar na diagonal secundária
            matriz[i][j] = 1; // Elementos da diagonal secundária
        } else {
            matriz[i][j] = 0; // Elementos fora da diagonal
        }
    }
}

console.log("Matriz com a diagonal secundária 3x3:");
console.table(matriz);