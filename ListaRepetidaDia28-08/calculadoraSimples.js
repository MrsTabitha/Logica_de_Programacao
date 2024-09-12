//Faça uma calculadora simples(página), com as quatro operações básicas ("+", "-", "*", "/") e dois campos para números.

const prompt = require("prompt-sync")();

const num1 = Number(prompt("Informe o primeiro número: "));
const num2 = Number(prompt("Informe o segundo número: "));
const operacao = prompt("Informe a operação desejada (+, -, *, /): ");

let resultado;

switch(operacao) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = "Erro: divisão por zero!";
        }
        break;
    default:
        resultado = "Operação inválida!";
}

console.log(`O resultado é: ${resultado}`);