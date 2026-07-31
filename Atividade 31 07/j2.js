let produto = prompt("nome do produto:");
let preco = parseFloat(prompt("Preço original do produto:"));
let percentual = parseFloat(prompt("Percentual de desconto:"));

let valorDesconto = preco * (percentual / 100);
let precoFinal = preco - valorDesconto;

console.log("Produto: " + produto);
console.log("Preço original: R$ " + preco.toFixed(2));
console.log("Desconto: R$ " + valorDesconto.toFixed(2));
console.log("Preço final: R$ " + precoFinal.toFixed(2));

alert(
  "Produto: " + produto +
  "\nPreço original: R$ " + preco.toFixed(2) +
  "\nDesconto: R$ " + valorDesconto.toFixed(2) +
  "\nPreço final: R$ " + precoFinal.toFixed(2)
);