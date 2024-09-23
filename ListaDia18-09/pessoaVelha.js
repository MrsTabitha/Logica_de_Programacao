//Encontrar a pessoa mais velha. Dado um vetor de objetos com pessoas (com `nome` e `idade`), use `reduce` para encontrar a pessoa mais velha.

const prompt = require('prompt-sync')();

let pessoas = [
    {nome: "Ana", idade: 18},
    {nome: "Laura", idade: 27},
    {nome: "Talita", idade: 40}
]

let maisVelha = pessoas.reduce((acc, pessoa) => {
    return (pessoa.idade > acc.idade) ? pessoa : acc;  // Retorna a pessoa mais velha
});

console.log(`A pessoa mais velha é: ${maisVelha.nome}, com ${maisVelha.idade} anos.`);