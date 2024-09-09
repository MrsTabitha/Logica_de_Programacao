//1 - Receba uma sequência de três números e determine se estão em ordem crescente, decrescente ou desordenada.

// Importar o pacote prompt-sync
const prompt = require("prompt-sync")();

// Receber três números do usuário
const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
const num3 = parseFloat(prompt("Digite o terceiro número: "));

// Verificar a ordem dos números
if (num1 < num2 && num2 < num3) {
    console.log("Os números estão em ordem crescente.");
} else if (num1 > num2 && num2 > num3) {
    console.log("Os números estão em ordem decrescente.");
} else {
    console.log("Os números estão desordenados.");
}