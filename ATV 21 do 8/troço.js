let entrada = prompt("Digite a temperatura atual em °C:");
let temperatura = parseFloat(entrada);

let mensagem = "";

if (isNaN(temperatura)) {
    mensagem = "Por favor, digite um número válido.";
} else if (temperatura < 15) {
    mensagem = "Está frio! 🥶";
} else if (temperatura <= 25) {
    mensagem = "O clima está agradável! 😊";
} else if (temperatura <= 35) {
    mensagem = "Está quente! 🥵";
} else {
    mensagem = "Está muito quente! 🔥";
}

document.getElementById("temperatura").textContent = "Temperatura informada: " + temperatura + "°C";
document.getElementById("mensagem").textContent = mensagem;

console.log("Temperatura: " + temperatura + "°C");
console.log("Classificação: " + mensagem);