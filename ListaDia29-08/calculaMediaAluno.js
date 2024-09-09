//4 - Calcule a média de três notas de um aluno, aplique uma bonificação conforme a faixa de notas, e determine se ele está aprovado ou reprovado. Bonificações: notas acima de 85 recebem +5 pontos, entre 70 e 85 recebem +3 pontos, e abaixo de 70 não recebem bonificação.

// Importar o pacote prompt-sync
const prompt = require("prompt-sync")();

// Receber as três notas do aluno
const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));

// Calcular a média das notas
let media = (nota1 + nota2 + nota3) / 3;

// Aplicar bonificação conforme a faixa de notas
if (media > 85) {
    media += 5;
} else if (media >= 70 && media <= 85) {
    media += 3;
}

// Determinar se o aluno está aprovado ou reprovado
const status = media >= 60 ? "aprovado" : "reprovado";

// Exibir o resultado final
console.log("A média final do aluno é:", media.toFixed(2));
console.log("O aluno está", status);