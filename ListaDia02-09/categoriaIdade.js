//Desenvolva um programa que recebe a idade de uma pessoa e, utilizando switch case, determina a categoria: "Criança" (0-12), "Adolescente" (13-17), "Adulto" (18-64), "Idoso" (65+).

const prompt = require("prompt-sync")();

const idade = Number(prompt("Informe sua idade: "));

let categoria;

switch(true){
    case(idade >= 0 && idade <= 12):
        categoria = "Criança";
        break;
    case(idade >= 13 && idade <= 17):
        categoria = "Adolescente";
        break;
    case(idade >= 18 && idade <= 64):
        categoria = "Adulto";
        break;
    case(idade >= 65):
        categoria = "Idoso";
        break;
    default:
        categoria = "Idade inválida"
}

console.log(`Sua idade esta na categoria: ${categoria}`)