//Concatenar listas de strings. Dado um vetor de vetores de strings, use `reduce` para concatenar todas as strings em uma única lista.

const prompt = require('prompt-sync')();

let listas = [
    ["Ana", "João"],
    ["Maria", "Pedro"],
    ["Thiago", "Lucas"]
];

let listaConcatenada = listas.reduce((acc, lista) => acc.concat(lista), []);

//let listaConcatenada = listas.reduce((acc, lista) => {
//    return acc.concat(lista);  // Concatena as listas
//}, []);  // Valor inicial é um array vazio

console.log(listas)
console.log(listaConcatenada);