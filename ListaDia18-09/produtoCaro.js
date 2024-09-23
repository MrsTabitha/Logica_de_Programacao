//Filtrar produtos caros. Dado um vetor de objetos representando produtos (com `nome`, `preco` e `categoria`), use `filter` para retornar os produtos que custam mais de R$100.

const prompt = require('prompt-sync')();

let produtos = [
    {nome: "panela", preco: 110, categoria: "cozinha"},
    {nome: "toalha", preco: 50, categoria: "banho"},
    {nome: "edredom", preco: 180, categoria: "cama"},
    {nome: "copo", preco: 6, categoria: "cozinha"}
]

let maisQue100 = produtos.filter(produto => produto.preco > 100)

console.log(maisQue100)