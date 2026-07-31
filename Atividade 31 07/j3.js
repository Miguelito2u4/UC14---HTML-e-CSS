let senha = prompt("Digite sua senha boy:");

let tamanho = senha.length;
let temMaiuscula = /[A-Z]/.test(senha);
let temMinuscula = /[a-z]/.test(senha);

let classificacao;

if (tamanho >= 8 && temMaiuscula && temMinuscula) {
    classificacao = "Essa ai é boa";
} else {
    classificacao = "muito fraca essa sua senha boy";
}

console.log("Tamanho da senha: " + tamanho);
console.log("Classificação: " + classificacao);

alert("Sua senha é: " + classificacao);