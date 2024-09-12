//Faça uma página que leia uma temperatura em graus Celsius e apresente-a convertida em graus Fahrenheit.

const prompt = require("prompt-sync")();

const celsius = parseFloat(prompt("Informe a temperatura em Celsius: "));
const fahrenheit = (celsius * 9 / 5) + 32;

console.log(`${celsius} Graus Celsius são ${fahrenheit} Graus Fahrenheit.`)