//A copa do mundo ocorre de 4 em 4 anos, desde 1930, exceto nos anos de 1942 e 1946 (Segunda Guerra Mundial), repita a leitura de um ano até ser digitado 0. Informe para o ano digitado se é ou não ano de Copa do Mundo.

const prompt = require("prompt-sync")();

let ano;

do {
    ano = Number(prompt("Informe um ano (0 para sair): "));

    if (ano === 0) {
        console.log("Encerrando o programa.");
        break; // Sai do loop quando o ano for 0
    }

    // Verifica se o ano está dentro da série de Copas (de 1930 em diante)
    if (ano >= 1930 && (ano - 1930) % 4 === 0 && ano !== 1942 && ano !== 1946) {
        console.log(`O ano ${ano} foi ou será ano de Copa do Mundo!`);
    } else {
        console.log(`O ano ${ano} não foi ano de Copa do Mundo.`);
    }

} while (ano !== 0);