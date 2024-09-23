//Multiplicar valores de uma matriz por 2. Usando `map`, multiplique todos os valores de uma matriz (vetor de vetores) por 2.

const prompt = require('prompt-sync')();

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrizMultiplicada = matriz.map(linha => linha.map(valor => valor * 2));

//let matrizMultiplicada = matriz.map(linha => {
//    return linha.map(valor => valor * 2);  
//});

console.log(`Matriz Original:`)
console.table(matriz)
console.log(`Matriz Multiplicada:`)
console.table(matrizMultiplicada);