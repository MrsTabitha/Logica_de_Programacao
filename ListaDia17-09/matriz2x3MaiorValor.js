//Crie uma matriz 2x3, encontre o maior valor presente na matriz.

const prompt = require('prompt-sync')();

let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

let maiorNumero = matriz[0][0]; 

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        if (matriz[i][j] > maiorNumero) {
            maiorNumero = matriz[i][j]; 
        }
    }
}

console.log("Matriz:");
console.table(matriz); 
console.log(`O maior elemento dessa matriz é: ${maiorNumero}`);