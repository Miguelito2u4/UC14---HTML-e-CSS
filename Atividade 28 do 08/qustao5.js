let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let usuario = prompt("Usuário:");
let senha = prompt("Senha:");

if (usuario != usuarioCorreto) {
  console.log("Usuário incorreto.");
} else if (senha != senhaCorreta) {
  console.log("Senha incorreta.");
} else {
  console.log("Login realizado com sucesso!");
}