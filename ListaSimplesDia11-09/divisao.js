//Escreva um algoritmo para ler 2 valores e imprimir o resultado da divisão do primeiro pelo segundo. Se o segundo valor informado for ZERO, deve ser lido um novo valor.

const prompt = require("prompt-sync")();

let dividendo = parseFloat(prompt("Informe o dividendo: "));
let divisor;

do {
    divisor = parseFloat(prompt("Informe o divisor: "));
    if (divisor === 0) {
        console.log("O divisor não pode ser zero. Tente novamente.");
    }
} while (divisor === 0);

let resultado = dividendo / divisor;
console.log(`O resultado é: ${resultado}`);