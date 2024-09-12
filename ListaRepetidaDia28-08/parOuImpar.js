//Faça uma página que leia um número inteiro e informe se ele é par ou ímpar.

const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Informe um número inteiro: "));

if (isNaN(numero)) {
    console.log("Por favor, insira um número válido.");
} else {
    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }
}