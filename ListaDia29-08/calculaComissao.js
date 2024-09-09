//3 - Um vendedor ganha comissão baseada no total de vendas: abaixo de 5000, nenhuma comissão; entre 5000 e 10000, 5%; acima de 10000, 10%. Calcule a comissão com base nas vendas de 3 meses.

// Importar o pacote prompt-sync
const prompt = require("prompt-sync")();

// Receber as vendas dos três meses
const vendasMes1 = parseFloat(prompt("Digite o total de vendas do primeiro mês: "));
const vendasMes2 = parseFloat(prompt("Digite o total de vendas do segundo mês: "));
const vendasMes3 = parseFloat(prompt("Digite o total de vendas do terceiro mês: "));

// Calcular o total de vendas nos três meses
const totalVendas = vendasMes1 + vendasMes2 + vendasMes3;

// Calcular a comissão com base no total de vendas
let comissao;

if (totalVendas < 5000) {
    comissao = 0;
} else if (totalVendas <= 10000) {
    comissao = totalVendas * 0.05;
} else {
    comissao = totalVendas * 0.10;
}

// Exibir o valor da comissão
console.log("A comissão do vendedor é: R$", comissao.toFixed(2));