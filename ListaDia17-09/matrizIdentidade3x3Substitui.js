//Crie uma matriz identidade 3x3, substitua todos os elementos acima da diagonal principal por 0.

const prompt = require('prompt-sync')();

const matriz = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];

// Substituindo todos os elementos acima da diagonal principal por 0
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j > i) { // Verifica se a posição está acima da diagonal principal
            matriz[i][j] = 0;
        }
    }
}

// Exibindo a matriz modificada
console.log("Matriz modificada:");
console.table(matriz);