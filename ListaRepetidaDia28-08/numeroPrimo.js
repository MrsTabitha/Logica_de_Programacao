//Crie uma página onde o usuário insira um número e a página informe se ele é primo ou não. (Dica: faça a verificação de primaridade apenas para números menores ou iguais a 100).

const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Informe um número (0 a 100): "));

if (numero < 2) {
    console.log(`O número ${numero} não é primo.`);
} else {
    let primo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            console.log(`O número ${numero} não é primo.`);
            primo = false;
            break;
        }
    }
    if (primo) {
        console.log(`O número ${numero} é primo.`);
    }
}