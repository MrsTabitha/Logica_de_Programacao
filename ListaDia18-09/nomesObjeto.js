//Transformar vetor de nomes em um objeto. Usando `reduce`, transforme um vetor de nomes (ex.: `['Ana', 'João', 'Pedro']`) em um objeto onde cada nome é uma chave e o valor é o comprimento do nome.

const prompt = require('prompt-sync')();

let nomes = ['Ana', 'Talita', 'Pedro'];

let objetoNomes = nomes.reduce((acc, nome) => {
    // Para cada nome, criamos uma chave no objeto `acc` com o nome e o comprimento
    acc[nome] = nome.length;

    // Retornamos o acumulador atualizado para a próxima iteração
    return acc;
}, {});  // O valor inicial do acumulador é um objeto vazio

console.log(objetoNomes);