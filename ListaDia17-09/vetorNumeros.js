//Crie um script que recebe um vetor de números e retorna o maior número presente no vetor.

const prompt = require('prompt-sync')();

const tamanho = parseInt(prompt("Digite o tamanho do vetor: "));

const numeros = [];

for (let i = 0; i < tamanho; i++) {
    const numero = parseFloat(prompt(`Digite o número ${i + 1}: `));
    numeros.push(numero);
}

let maiorNumero = numeros[0];  // Inicializa com o primeiro número do vetor

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];  // Atualiza se encontrar um número maior
    }
}

console.log(`Maior número no vetor: ${maiorNumero}`);