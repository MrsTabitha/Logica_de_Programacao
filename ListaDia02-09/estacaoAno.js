//Desenvolva um programa que recebe um número correspondente ao mês (1 a 12) e, utilizando switch case, imprime a estação do ano (Primavera, Verão, Outono, Inverno).

const prompt = require("prompt-sync")();

const estacao = Number(prompt("Informe um número correspondente ao mês (1 a 12): "));

switch (estacao){

    case 1:
    case 2:
    case 3:
        console.log("Verão");
        break;

    case 4:
    case 5:
    case 6:
        console.log("Outono");
        break;

    case 7:
    case 8:
    case 9:
        console.log("Inverno");
        break;

    case 10:
    case 11:
    case 12:
        console.log("Primavera");
        break;

    default:
        console.log("Não é um mês.");
}