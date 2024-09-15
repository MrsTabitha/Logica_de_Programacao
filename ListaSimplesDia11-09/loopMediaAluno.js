//Escreva um algoritmo que imprima os números de 1(inclusive) a 10 (inclusive) em ordem decrescente.

const prompt = require("prompt-sync")();

let resposta;
do {
    resposta = prompt("Deseja calcular a média de um aluno? 1. Sim 2. Não | : ");
    
    if (resposta === "1") {
        let nota1 = parseFloat(prompt("Informe a primeira nota: "));
        let nota2 = parseFloat(prompt("Informe a segunda nota: "));
        
        let media = (nota1 + nota2) / 2;
        console.log("A média do aluno é: " + media);
    }

} while (resposta !== "2");