//Faça um programa que leia 10 valores, calcule e escreva a média aritmética desses valores.

const prompt = require("prompt-sync")();

let num;
let soma = 0;

for (let i = 1; i <= 10; i++) { 
    num = parseFloat(prompt("Informe o valor: "));
    soma += num; //soma = soma + num
}

let media = soma / 10 ;
console.log(`A média aritmética desses 10 valores é: ${media.toFixed(2)}`);