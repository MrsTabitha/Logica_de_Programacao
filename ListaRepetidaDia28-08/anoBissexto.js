//Desenvolva uma página que leia um ano e informe se ele é um ano bissexto ou não.

const prompt = require("prompt-sync")();

const ano = parseInt(prompt("Informe o ano: "));

if (isNaN(ano)) {
    console.log("Por favor, insira um ano válido.");
} else {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        console.log(`O ano ${ano} é bissexto.`);
    } else {
        console.log(`O ano ${ano} não é bissexto.`);
    }
}
