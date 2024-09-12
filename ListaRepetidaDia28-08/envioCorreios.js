//Desenvolva uma página onde o usuário insira o peso de um pacote e selecione uma modalidade de envio (padrão, expresso ou internacional). A página deve calcular o valor do frete com base na modalidade escolhida.

const prompt = require("prompt-sync")();

const peso = parseFloat(prompt("Informe o peso do seu produto em kg :"));
const modalidade = prompt("|Digite 1 para: Padrão | Digite 2 para: Expresso | Digite 3 para: Internacional| :")

const taxaPadrao = 10.00; // Padrão: R$10,00 por kg
const taxaExpresso = 20.00; // Expresso: R$20,00 por kg
const taxaInternacional = 30.00; // Internacional: R$30,00 por kg

if (isNaN(peso) || peso <= 0) {
    console.log("Por favor, insira um peso válido para o pacote.");
} else {
    let valorFrete = 0;

    switch (modalidade) {
        case '1':
            valorFrete = peso * taxaPadrao;
            break;
        case '2':
            valorFrete = peso * taxaExpresso;
            break;     
        case '3':
            valorFrete = peso * taxaInternacional;
            break;
    }

    console.log(`O valor do frete é R$ ${valorFrete.toFixed(2)}.`);
}