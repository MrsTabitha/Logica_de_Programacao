//Crie um script que recebe um vetor e um elemento, e retorna true se o elemento estiver presente no vetor, caso contrário, retorna false.

const prompt = require('prompt-sync')();

const tamanho = parseInt(prompt("Digite o tamanho do vetor: "));

const numeros = [];

for (let i = 0; i < tamanho; i++) {
    const numero = parseFloat(prompt(`Digite o número ${i + 1}: `));
    numeros.push(numero);
}

const busca = parseFloat(prompt("Digite o número a ser buscado: "))

const encontrado = numeros.includes(busca);

if (encontrado) {
    console.log("O elemento está presente no vetor.");
} else {
    console.log("O elemento não está presente no vetor.");
}