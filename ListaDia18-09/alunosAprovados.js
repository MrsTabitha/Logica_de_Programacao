//Filtrar alunos aprovados. Dado um vetor de objetos representando alunos (com `nome` e `nota`), use `filter` para retornar apenas os alunos com nota maior que 7.

const prompt = require('prompt-sync')();

let alunos = [
    {nome: "Pedro", nota: 8},
    {nome: "Ana", nota: 4},
    {nome: "Maria", nota: 10},
    {nome: "Thiago", nota: 9},
    {nome: "Lucas", nota: 7}
]

let aprovados = alunos.filter(aluno => aluno.nota > 7)

console.log("Os alunos aprovados são: ")
console.log(aprovados)
//console.log("Os alunos aprovados são:");
//aprovados.forEach(aluno => console.log(aluno.nome));