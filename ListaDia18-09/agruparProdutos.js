//Agrupar produtos por preço. Dado um vetor de objetos representando produtos, utilize `reduce` para agrupar os produtos em duas categorias: os que custam mais de R$50 e os que custam menos ou igual a R$50.

const prompt = require('prompt-sync')();

let produtos = [
    {nome: "panela", preco: 110, categoria: "cozinha"},
    {nome: "toalha", preco: 50, categoria: "banho"},
    {nome: "edredom", preco: 180, categoria: "cama"},
    {nome: "copo", preco: 6, categoria: "cozinha"}
]


// Usando reduce para agrupar os produtos
let agrupadosPorPreco = produtos.reduce((acumulador, produto) => {
    if (produto.preco > 50) {
        acumulador.acimaDe50.push(produto);
    } else {
        acumulador.igualOuAbaixoDe50.push(produto);
    }
    return acumulador;
}, {acimaDe50: [], igualOuAbaixoDe50: []});

console.log("Produtos com preço acima de R$50:", agrupadosPorPreco.acimaDe50);
console.log("Produtos com preço igual ou abaixo de R$50:", agrupadosPorPreco.igualOuAbaixoDe50);