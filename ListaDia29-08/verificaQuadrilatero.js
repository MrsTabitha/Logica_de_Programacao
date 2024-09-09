//2 - Receba as medidas dos lados de um quadrilátero e determine se é um quadrado, retângulo, losango ou outro.

// Importar o pacote prompt-sync
const prompt = require("prompt-sync")();

// Receber as medidas dos quatro lados do quadrilátero
const lado1 = parseFloat(prompt("Digite o valor do primeiro lado: "));
const lado2 = parseFloat(prompt("Digite o valor do segundo lado: "));
const lado3 = parseFloat(prompt("Digite o valor do terceiro lado: "));
const lado4 = parseFloat(prompt("Digite o valor do quarto lado: "));

// Verificar o tipo de quadrilátero
if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4) {
    console.log("O quadrilátero é um quadrado.");
} else if (lado1 === lado3 && lado2 === lado4) {
    console.log("O quadrilátero é um retângulo.");
} else if (lado1 === lado2 && lado3 === lado4) {
    console.log("O quadrilátero é um losango.");
} else {
    console.log("O quadrilátero é outro tipo.");
}