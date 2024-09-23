//Transformar lista de objetos em string. Usando `map`, transforme um vetor de objetos (com `nome` e `idade`) em um vetor de strings formatadas como `"Nome: X, Idade: Y"`.

const prompt = require('prompt-sync')();

let pessoas = [
    {nome: "Ana", idade: 18},
    {nome: "Laura", idade: 27},
    {nome: "Talita", idade: 40}
]

// Usando map para transformar o vetor de objetos em strings formatadas
let vetorString = pessoas.map(pessoa => {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`;
});

console.log(vetorString)