//Faça uma página que permita ao usuário inserir um valor em Reais (BRL) e converta-o para Dólares (USD) ou Euros (EUR), com base em uma taxa de câmbio fixa. Use um campo de seleção (dropdown) para o usuário escolher a moeda.

const prompt = require("prompt-sync")();

const valorBRL = parseFloat(prompt("Informe o valor em reais (BRL): "));
const moeda = prompt("Digite 1 para converter em Dólares (USD) ou 2 para converter em Euros (EUR): "); // Entrada como string

// Taxas de conversão
const taxaUSD = 5.50; 
const taxaEUR = 6.14; 

let resultadoConversao;

if (isNaN(valorBRL) || valorBRL <= 0) {
    resultadoConversao = '|Por favor, insira um valor válido em BRL!|';
} else {
    if (moeda === '1') {
        const valorConvertido = valorBRL / taxaUSD;
        resultadoConversao = `USD: US$${valorConvertido.toFixed(2)} Doláres`;  
    } else if (moeda === '2') { 
        const valorConvertido = valorBRL / taxaEUR;
        resultadoConversao = `EUR: €${valorConvertido.toFixed(2)} Euros`;  
    } else {
        resultadoConversao = '|Opção de moeda inválida!|';
    }
}

console.log(`R$${valorBRL.toFixed(2)} Reais convertidos para ${resultadoConversao}`);