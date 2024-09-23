//Calcular a média de idade. Dado um vetor de objetos com pessoas (com `nome`, `idade` e `profissao`), utilize `reduce` para calcular a média de idade das pessoas.

const prompt = require('prompt-sync')();

let pessoas = [
    {nome: "Ana", idade: 18, profissao: "Designer"},
    {nome: "Laura", idade: 27, profissao: "Enfermeira"},
    {nome: "Talita", idade: 40, profissao: "Programadora"}
]

let somaIdades = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0);

let mediaIdades = somaIdades / pessoas.length;

console.log(`A média de idade é: ${mediaIdades.toFixed(2)}`);