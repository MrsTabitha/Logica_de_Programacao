//Crie um programa que recebe o nome de um animal e, utilizando switch case, classifica o animal como "Mamífero", "Ave", "Réptil", etc. Entrada de ao menos 5 animais para cada espécie

const prompt = require("prompt-sync")();

const animal = prompt("Digite o nome de um animal:").toLowerCase();

let classificacao;

switch (animal) {

    case "cachorro":
    case "gato":
    case "vaca":
    case "porco":
    case "cavalo":
        classificacao = "Mamífero";
        break;

    case "águia":
    case "pato":
    case "galinha":
    case "pinguim":
    case "coruja":
        classificacao = "Ave";
        break;

    case "cobra":
    case "jacaré":
    case "lagarto":
    case "tartaruga":
    case "crocodilo":
        classificacao = "Réptil";
        break;

    case "sapo":
    case "rã":
    case "perereca":
    case "salamandra":
    case "célula":
        classificacao = "Anfíbio";
        break;

    case "tubarão":
    case "peixe-palhaço":
    case "salmão":
    case "bacalhau":
    case "dourado":
        classificacao = "Peixe";
        break;

    default:
        classificacao = "Desconhecido";
}

console.log(`O animal: ${animal} é um: ${classificacao}`)

