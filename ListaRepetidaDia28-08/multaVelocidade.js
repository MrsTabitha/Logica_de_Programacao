//Faça uma página que leia a velocidade de um veículo e informe se ele está dentro do limite (até 80 km/h), acima do limite mas com multa leve (81-100 km/h), ou com multa grave (acima de 100 km/h).

const prompt = require("prompt-sync")();

const velocidade = parseFloat(prompt("Informe a sua velocidade em km/h : "));

if (isNaN(velocidade) || velocidade < 0) {
    console.log("Por favor, insira uma velocidade válida.");
} else if (velocidade <= 80) {
    console.log("Você está dentro do limite de velocidade.");
} else if (velocidade <= 100) {
    console.log("Você está acima do limite de velocidade. Multa leve.");
} else {
    console.log("Você está com multa grave. Velocidade excessiva!");
}
