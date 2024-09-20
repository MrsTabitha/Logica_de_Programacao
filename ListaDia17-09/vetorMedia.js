//Crie um script que recebe um vetor de qualquer tamanho e qualquer número e retorna a média dos seus elementos.

const prompt = require('prompt-sync')();

const tamanho = parseInt(prompt("Digite o tamanho do vetor: "));

const numeros = [];

for (let i = 0; i < tamanho; i++) {
    const numero = parseFloat(prompt(`Digite o número ${i + 1}: `));
    numeros.push(numero);
}

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

const media = soma / numeros.length;

console.log(`A média dos elementos é: ${media.toFixed(2)}`);