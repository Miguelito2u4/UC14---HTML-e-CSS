function mostrarCidade() {
    let nomeCidade = document.getElementById("cidade").value;
    document.getElementById("mensagem").textContent = "Você quer visitar " + nomeCidade + "!";
}

function destacarMensagem() {
    let msg = document.getElementById("mensagem");
    msg.style.color = "red";
    msg.style.fontSize = "22px";
}

let valorContador = 10;

function alterarContador(quantidade) {
    valorContador += quantidade;
    document.getElementById("contador").textContent = valorContador;
}