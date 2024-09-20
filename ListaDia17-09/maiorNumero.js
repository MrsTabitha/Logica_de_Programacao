//Crie um vetor de números e determine o maior número presente no vetor.

const prompt = require('prompt-sync')();

const numeros = [3,9,7,1,0,4];

console.log(`Vetor: ${numeros}`)

let maiorNumero = numeros[0];  // Inicializa com o primeiro número do vetor

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];  // Atualiza se encontrar um número maior
    }
}

// Exibindo o maior número
console.log(`Maior número no vetor: ${maiorNumero}`);