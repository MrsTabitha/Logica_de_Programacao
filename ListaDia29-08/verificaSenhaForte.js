//6 - Desenvolva um programa que verifica se uma senha é considerada forte. Uma senha é considerada forte se tiver pelo menos 8 caracteres, incluir pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial. Critérios: ○ Comprimento mínimo de 8 caracteres. ○ Deve conter pelo menos uma letra maiúscula. ○ Deve conter pelo menos uma letra minúscula. ○ Deve conter pelo menos um dígito(número). ○ Deve conter pelo menos um caractere especial (@, #, $, %, etc.).

// Importar o pacote prompt-sync
const prompt = require("prompt-sync")();

// Receber a senha do usuário
const senha = prompt("Digite a sua senha: ");

// Função para verificar se a senha é forte
function verificarSenhaForte(senha) {
    // Verificar comprimento mínimo
    if (senha.length < 8) return false;

    // Verificar se contém pelo menos uma letra maiúscula
    if (!/[A-Z]/.test(senha)) return false;

    // Verificar se contém pelo menos uma letra minúscula
    if (!/[a-z]/.test(senha)) return false;

    // Verificar se contém pelo menos um dígito
    if (!/\d/.test(senha)) return false;

    // Verificar se contém pelo menos um caractere especial
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) return false;

    // Se passou por todas as verificações
    return true;
}

// Verificar e exibir o resultado
if (verificarSenhaForte(senha)) {
    console.log("A senha é considerada forte.");
} else {
    console.log("A senha não é forte o suficiente.");
}