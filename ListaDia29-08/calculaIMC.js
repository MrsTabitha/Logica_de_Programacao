//5 - Cálculo do IMC com Categorias Detalhadas. Implemente um programa que calcula o Índice de Massa Corporal (IMC) e categoriza o resultado de acordo com as faixas específicas, fornecendo uma mensagem detalhada sobre o estado de saúde. Categorias de IMC: ○ Menor que 18.5: Abaixo do peso ○ 18.5 a 24.9: Peso normal ○ 25 a 29.9: Sobrepeso ○ 30 a 34.9: Obesidade grau I ○ 35 a 39.9: Obesidade grau II ○ Maior ou igual a 40: Obesidade grau III

// Importar o pacote prompt-sync
const prompt = require("prompt-sync")();

// Receber o peso e a altura do usuário
const peso = parseFloat(prompt("Digite seu peso em kg: "));
const altura = parseFloat(prompt("Digite sua altura em metros: "));

// Verificar se as entradas são válidas
if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    console.log("Por favor, insira valores válidos para o peso e a altura.");
    process.exit(1); // Encerra o processo com código de erro
}

// Calcular o IMC
const imc = peso / (altura * altura);

// Determinar a categoria de IMC
let categoria;

if (imc < 18.5) {
    categoria = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    categoria = "Peso normal";
} else if (imc >= 25 && imc <= 29.9) {
    categoria = "Sobrepeso";
} else if (imc >= 30 && imc <= 34.9) {
    categoria = "Obesidade grau I";
} else if (imc >= 35 && imc <= 39.9) {
    categoria = "Obesidade grau II";
} else {
    categoria = "Obesidade grau III";
}

// Exibir o resultado
console.log(`Seu IMC é: ${imc.toFixed(2)}`);
console.log(`Categoria: ${categoria}`);