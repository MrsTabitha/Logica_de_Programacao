//Adicionar um desconto aos produtos. Usando `map`, adicione um desconto de 10% a todos os produtos de um vetor de objetos (com `nome` e `preco`), criando um novo vetor com os produtos descontados.

const prompt = require('prompt-sync')();

let produtos = [
    {nome: "panela", preco: 110},
    {nome: "toalha", preco: 50},
    {nome: "edredom", preco: 180},
    {nome: "copo", preco: 6}
]

let produtosDesconto = produtos.map(produto => {
    return {
        nome: produto.nome, // Mantém o nome original
        preco: produto.preco - (produto.preco * 0.10) // Aplica o desconto de 10%
    };
});

console.log("Os produtos a seguir estão com desconto de 10%: ")
console.log(produtosDesconto)