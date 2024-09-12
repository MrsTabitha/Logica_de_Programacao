//Crie uma página que leia uma nota final de 0 a 10 e classifique-a em conceitos como A (>=9), B (>=7 e <9), C (>=5 e <7), D (>=3 e <5) e E (<3).

const prompt = require("prompt-sync")();

const nota = parseFloat(prompt("Informe a nota: "));

if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Por favor, insira uma nota válida entre 0 e 10.");
} else {
    let conceito;

    if (nota >= 9) {
        conceito = 'A';
    } else if (nota >= 7) {
        conceito = 'B';
    } else if (nota >= 5) {
        conceito = 'C';
    } else if (nota >= 3) {
        conceito = 'D';
    } else {
        conceito = 'E';
    }

    console.log(`O conceito da nota ${nota} é: ${conceito}.`);
}