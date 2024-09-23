//Filtrar e transformar valores de uma matriz. Usando `map` e `filter`, crie um algoritmo que filtre os números pares de uma matriz e multiplique-os por 3.

const prompt = require('prompt-sync')();

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Usando map para percorrer a matriz e filter para filtrar os números pares
let paresMultiplicados = matriz.map(linha => {
    return linha.filter(numero => numero % 2 === 0).map(numero => numero * 3);
});

console.table(matriz)
console.log(paresMultiplicados);