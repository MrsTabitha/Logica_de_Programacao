//Faça um programa que leia a quantidade de alunos em uma turma. Após, leia as notas desses alunos, calcule e mostre a média aritmética dessas notas.

const prompt = require("prompt-sync")(); 

let alunos = Number(prompt("Informe a quantidade de alunos dessa turma: "));

// Verifica se a quantidade de alunos é válida
while (isNaN(alunos) || alunos <= 0) {
    console.log("Quantidade de alunos inválida. Por favor, insira um número positivo.");
    alunos = Number(prompt("Informe a quantidade de alunos dessa turma: "));
}

let soma = 0;

for (let i = 1; i <= alunos; i++) {
    let nota = Number(prompt(`Informe a nota do aluno ${i}: `));

    // Verifica se a nota é válida (por exemplo, entre 0 e 10)
    while (isNaN(nota) || nota < 0 || nota > 10) {
        console.log("Nota inválida. Por favor, insira uma nota entre 0 e 10.");
        nota = Number(prompt(`Informe a nota do aluno ${i}: `));
    }

    soma += nota;
}

const media = soma / alunos;
console.log(`A média das notas dos ${alunos} alunos dessa turma é: ${media.toFixed(1)}.`);
