//Um posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes. Faça um programa para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido). Ao ser informado o código do combustível, o seu respectivo nome deve ser impresso na tela. O programa será encerrado quando o código informado for o número 4 escrevendo então a mensagem: "MUITO OBRIGADO e a quantidade de clientes que abasteceram cada tipo de combustível.

const prompt = require("prompt-sync")();

let combustivel;
let alcool = 0;
let gasolina = 0;
let diesel = 0;

do{
    combustivel = Number(prompt("Informe: 1.Álcool 2.Gasolina 3.Diesel 4.Fim| :"));
    
    if(combustivel == 4){
        console.log("MUITO OBRIGADO!");
        console.log(`${alcool} clientes abasteceram com Álcool.`);
        console.log(`${gasolina} clientes abasteceram com Gasolina.`);
        console.log(`${diesel} clientes abasteceram com Diesel.`);
        break;
    }

    if(combustivel > 4 || combustivel < 1){
        console.log("Código inválido, tente novamente.");
    }else{
        if(combustivel == 1){
            console.log("Álcool");
            alcool++;
        }else if(combustivel == 2){
            console.log("Gasolina");
            gasolina++;
        }else if(combustivel == 3){
            console.log("Diesel");
            diesel++;
        }
    }

}while(combustivel != 4)