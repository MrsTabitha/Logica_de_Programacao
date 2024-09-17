//Crie um vetor de cores. Pergunte ao usuário para inserir uma cor. Exiba a posição da cor no vetor ou uma mensagem dizendo que a cor não foi encontrada.

const prompt = require('prompt-sync')();

const cores = ["vermelho", "azul", "verde", "amarelo"];

const cor = prompt("Informe uma cor: ");

const indice = cores.indexOf(cor);

if (indice !== -1) {
    console.log(`A cor ${cor} está na posição ${indice} do vetor.`);
} else {
    console.log("A cor não foi encontrada.");
}