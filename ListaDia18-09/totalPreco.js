//Obter a soma total de preços. Dado um vetor de objetos representando produtos (com `nome` e `preco`), utilize `reduce` para calcular o valor total de todos os produtos.

const prompt = require('prompt-sync')();

let produtos = [
    {nome: "panela", preco: 110},
    {nome: "toalha", preco: 50},
    {nome: "edredom", preco: 180},
    {nome: "copo", preco: 6}
];

let total = produtos.reduce((soma, produto) => soma + produto.preco, 0)

//let total = produtos.reduce((soma, produto) => {
    // Somando o preço do produto ao acumulador
//    return soma + produto.preco;
//}, 0);  // O acumulador inicial é 0, pois estamos somando valores

console.log(`A soma de todos os preços é: R$${total.toFixed(2)} reais`)