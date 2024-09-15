//Calcular a tabuada para qualquer número.

const prompt = require("prompt-sync")();

const num = Number(prompt("Informe um número: "));

for(let i = 1; i <= 10; i++){
    let tabuada = num * i;
    console.log(`${num} x ${i} = ${tabuada}`);
}