//Faça uma página que leia os três lados de um triângulo e informe se ele é equilátero (todos os lados iguais), isósceles (dois lados iguais) ou escaleno (todos os lados diferentes) e apresente uma imagem mostrando o triângulo escolhido.

const prompt = require("prompt-sync")();

const lado1 = parseFloat(prompt("Informe o primeiro lado: "));
const lado2 = parseFloat(prompt("Informe o segundo lado: "));
const lado3 = parseFloat(prompt("Informe o terceiro lado: "));

if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Por favor, insira valores válidos para todos os lados.");
    return;
}

let tipoTriangulo = '';

if (lado1 === lado2 && lado2 === lado3) {
    tipoTriangulo = 'Equilátero';
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    tipoTriangulo = 'Isósceles';
} else {
    tipoTriangulo = 'Escaleno';
}

console.log(`O triângulo é ${tipoTriangulo}.`);
