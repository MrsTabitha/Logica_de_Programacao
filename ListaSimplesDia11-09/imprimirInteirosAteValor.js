//Faça um programa que leia um valor e mostre todos os valores inteiros entre 1 (inclusive) e o valor lido (inclusive). Considere que o valor lido será sempre maior que ZERO.

const prompt = require("prompt-sync")();

let num;

do {
    num = Number(prompt("Informe um número: "));
    if (num <= 0) {
        console.log("O número tem que ser maior que zero. Tente novamente.");
    }
} while (num <= 0);

for (let i = 1; i <= num; i++) { 
    console.log(`${i}`);
}
