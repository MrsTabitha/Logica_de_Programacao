//Faça uma página onde informa três notas de 0 a 10, onde de 0 a <4, o aluno está reprovado, >=4 e < 7 em recuperação e >=7 está aprovado, exibindo a mensagem de correta.

const prompt = require("prompt-sync")();

const nota1 = parseFloat(prompt("Informe a primeira nota: "));
const nota2 = parseFloat(prompt("Informe a segunda nota: "));
const nota3 = parseFloat(prompt("Informe a terceira nota: "));

let media;
let resultado;


if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    resultado += 'Por favor, insira todas as notas.';
} else {
    media = (nota1 + nota2 + nota3) / 3;

    if (media < 4) {
        resultado = 'Reprovado';
    } else if (media >= 4 && media < 7) {
        resultado = 'Em Recuperação';
    } else {
        resultado = 'Aprovado';
    }
}

console.log(`Sua média é: ${media.toFixed(2)} \nResultado: ${resultado}`)