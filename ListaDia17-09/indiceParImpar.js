//Preencher um vetor de n elementos com "Ímpar" se o índice do elemento for ímpar, e "Par" se for par. Escrever o vetor após o seu total preenchimento.

const prompt = require('prompt-sync')();

const tamanho = parseInt(prompt("Digite o tamanho do vetor: "));

const vetor = [];

for (let i = 0; i < tamanho; i++) {
    if(i % 2 == 0){
        vetor.push(` ${i}: Par`)
    }else{
        vetor.push(` ${i}: Ímpar`)
    }
}

console.log(`Vetor de índices classificados em Par ou Impar:\n${vetor}`)