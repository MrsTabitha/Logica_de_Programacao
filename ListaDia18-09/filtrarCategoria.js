//Filtrar produtos por categoria. Usando `filter`, crie uma função que retorna apenas os produtos de uma categoria específica a partir de um vetor de produtos (com `nome`, `preco` e `categoria`).

const prompt = require('prompt-sync')();

let produtos = [
    {nome: "panela", preco: 110, categoria: "cozinha"},
    {nome: "toalha", preco: 50, categoria: "banho"},
    {nome: "edredom", preco: 180, categoria: "cama"},
    {nome: "copo", preco: 6, categoria: "cozinha"}
]

let categoriaDesejada = prompt("Digite a categoria que deseja filtrar (cozinha, banho, cama): ");

// Usando filter diretamente para filtrar os produtos
let produtosFiltrados = produtos.filter(produto => produto.categoria === categoriaDesejada);

console.log(`Produtos da categoria "${categoriaDesejada}":`, produtosFiltrados);