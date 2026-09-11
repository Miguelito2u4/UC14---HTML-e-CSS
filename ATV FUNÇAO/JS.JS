console.log("Olá, Luiz! Seja bem-vindo!");
console.log("Olá, Gustavo! Seja bem-vindo!");
console.log("Olá, Cecília! Seja bem-vinda!");

function darBoasVindas(nome) {
    console.log(`Olá, {nome}! Seja bem-vindo(a)!`);
}

darBoasVindas("Luiz");
darBoasVindas("Gustavo");
darBoasVindas("Cecília");

function apresentar(nome, idade) {
    console.log(`Olá, meu nome é {nome} e tenho {idade} anos.`);
}

apresentar("Luiz", 25);
apresentar("Gustavo", 30);
apresentar("Cecília", 28);



atividade 

function verificarEstudos(nome) {
    console.log(`{nome} está estudando.`);
}

Estudando("Jennifer");
Estudando("Duda");
Estudando("cerlan");



function somar(a,b) {
    return a + b ;
}

somar(5, 3)

let resultado= somar (5, 3)

console.log(resultado);



function verificarNota(nota1, nota2) { 
    let media = (nota1 + nota2) / 2; 
 
    if (media >= 6) { 
        console.log(`Média: {media} - Aprovado!`); 
    } else { 
        console.log(`Média: {media} - Reprovado!`); 
    } 
} 
 
verificarNota(10, 2); 
verificarNota(10, 1);

//crie um programa que utilizr uma função com varios parametros para calcular o custo total de uma viagem. o programa devera receber os valores de hospedagem, alimentação e passeios, calcular o total e informar se a viagem está do orçamento de R$2.000,00.


function calcularViagem(hospedagem, alimentacao, passeios) {
    let total = hospedagem + alimentacao + passeios;

    console.log("Hospedagem: R$ " + hospedagem);
    console.log("Alimentação: R$ " + alimentacao);
    console.log("Passeios: R$ " + passeios);
    console.log("Custo total: R$ " + total);

    if (total <= 2000) {
        console.log("A viagem está dentro do orçamento de R$ 2.000,00.");
    } else {
        console.log("A viagem está acima do orçamento de R$ 2.000,00.");
    }
}

let hospedagem = 900;
let alimentacao = 500;
let passeios = 400;

calcularViagem(hospedagem, alimentacao, passeios);
