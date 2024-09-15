//Imprimir um Triângulo de Asteriscos com 4 Linhas.

const prompt = require("prompt-sync")();

const linhas = 4; 

for(let i = 1; i <= linhas; i++){
    let linha = '';

    for(let j = 0; j < i; j++){
        linha += '*';
    }
    console.log(linha)
}