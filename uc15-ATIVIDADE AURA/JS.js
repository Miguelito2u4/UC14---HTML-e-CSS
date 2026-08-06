let nome = prompt('Qual é o seu nome?');
let nota1Str = prompt(`Olá, ${nome}! Qual foi a sua primeira nota?\n(use vírgula ou ponto - ex: 6,5 ou 6.5)`);
let nota2Str = prompt('Qual foi a sua segunda nota?\n(ex: 7,5 ou 7.5)');

let nota1 = Number(nota1Str.replace(',', '.'));
let nota2 = Number(nota2Str.replace(',', '.'));

let media = (nota1 + nota2) / 2;
let mediaFormatada = media.toFixed(1);

console.log('Nome:', nome);
console.log('Média:', mediaFormatada);

if (media < 4) {
    console.log("REPROVADO");
} else if (media <= 6) {
    console.log("RECUPERAÇÃO");
} else {
    console.log("APROVADO");
}