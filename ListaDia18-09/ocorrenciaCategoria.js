//Contar a ocorrência de categorias. Dado um vetor de objetos com produtos (com `nome`, `preco` e `categoria`), use `reduce` para contar quantos produtos existem em cada categoria.

const prompt = require('prompt-sync')();

let produtos = [
    {nome: "panela", preco: 110, categoria: "cozinha"},
    {nome: "toalha", preco: 50, categoria: "banho"},
    {nome: "edredom", preco: 180, categoria: "cama"},
    {nome: "copo", preco: 6, categoria: "cozinha"}
]

// Usando reduce para contar quantos produtos existem em cada categoria
let contagemCategorias = produtos.reduce((acc, produto) => {
    // Se a categoria já existir no acumulador, incrementa, senão define como 1
    acc[produto.categoria] = (acc[produto.categoria] || 0) + 1;
    return acc; // Retorna o acumulador atualizado
}, {});

console.log(contagemCategorias);