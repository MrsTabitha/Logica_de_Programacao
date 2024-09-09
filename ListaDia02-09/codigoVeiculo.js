//Desenvolva um programa que recebe um código de veículo (1: Carro, 2: Moto) e, utilizando switch case, exibe informações sobre o tipo de veículo. Ex: Uno Mille, Gol 1.0 ... e ao selecionar um veículo devolva as informações dele: ○ Gol 1.0 ○ Marca Volkswagen ○ Peso = 2.5 toneladas ○ tanque = 30 litros ○ Valor = R$ 36.000,00

const prompt = require("prompt-sync")();

const codigoVeiculo = Number(prompt("Digite o código do veículo (1: Carro, 2: Moto):"));

switch(codigoVeiculo) {

    case 1:
        console.log("Modelo: Gol 1.0\nMarca: Volkswagen\nPeso: 2.5 toneladas\nTanque: 30 litros\nValor: R$ 36.000,00");
        break;

    case 2:
        console.log("Modelo: CG 160\nMarca: Honda\nPeso: 160 kg\nTanque: 16 litros\nValor: R$ 14.000,00");
        break;

    default:
        console.log("Código de veículo inválido!");
}