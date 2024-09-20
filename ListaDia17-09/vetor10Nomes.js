//Ler um vetor de 10 nomes. Entrar com o nome de uma pessoa pelo prompt. Escrever a mensagem “ACHEI” se o nome estiver no vetor e “NÃO ACHEI” caso contrário.

const prompt = require('prompt-sync')();

let nomes = []

for (let i = 0; i < 10; i++) {
    let nome = prompt(`Digite o nome ${i + 1}: `)
    nomes.push(nome)
}

const nomeProcurado = prompt("Digite o nome que você está procurando:");

if (nomes.includes(nomeProcurado)) {
    console.log("ACHEI");
} else {
    console.log("NÃO ACHEI");
}