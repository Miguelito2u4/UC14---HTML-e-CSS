/* 
  Desenvolvido por Cerlan Miguel (Cerlan.classic)
  Projeto: Minha Vitrine Dev (SENAC MedTec)
  
  DECLARAÇÃO DE USO DE IA:
  Utilizei Inteligência Artificial para auxiliar na estruturação lógica 
  das funções de validação do formulário e na janela modal da LGPD.
*/

document.addEventListener("DOMContentLoaded", () => {
    inicializarMenuHamburguer();
    inicializarSaudacaoDinamica();
    inicializarModoEscuro();
    inicializarValidacaoFormulario();
    inicializarAnoAutomatico();
    inicializarModalLgpd();
});

function inicializarMenuHamburguer() {
    const btnMenu = document.getElementById("btn-menu");
    const menu = document.getElementById("menu");

    if (!btnMenu || !menu) return;

    btnMenu.addEventListener("click", () => {
        menu.classList.toggle("ativo");
        const estaExpandido = menu.classList.contains("ativo");
        btnMenu.setAttribute("aria-expanded", estaExpandido);
    });

    const linksMenu = menu.querySelectorAll("a");
    linksMenu.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("ativo");
            btnMenu.setAttribute("aria-expanded", "false");
        });
    });
}
function obterSaudacao(hora) {
    if (hora >= 5 && hora < 12) {
        return "Eae boy, bom dia!";
    } else if (hora >= 12 && hora < 18) {
        return "Eae boy, boa tarde!";
    } else {
        return "Eae boy, boa noite!";
    }
}

function inicializarSaudacaoDinamica() {
    const spanSaudacao = document.getElementById("saudacao-dinamica");
    if (!spanSaudacao) return;

    const horaAtual = new Date().getHours();
    spanSaudacao.textContent = obterSaudacao(horaAtual);
}

function inicializarModoEscuro() {
    const btnTema = document.getElementById("btn-tema");
    if (!btnTema) return;

    btnTema.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        
        if (document.body.classList.contains("light-mode")) {
            btnTema.textContent = "☀️";
            btnTema.setAttribute("aria-label", "Alternar para modo escuro");
        } else {
            btnTema.textContent = "🌙";
            btnTema.setAttribute("aria-label", "Alternar para modo claro");
        }
    });
}


function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const consentimento = document.getElementById("consentimento").checked;

    const erroNome = document.getElementById("erro-nome");
    const erroEmail = document.getElementById("erro-email");
    const erroMensagem = document.getElementById("erro-mensagem");
    const erroConsentimento = document.getElementById("erro-consentimento");

    if (erroNome) erroNome.textContent = "";
    if (erroEmail) erroEmail.textContent = "";
    if (erroMensagem) erroMensagem.textContent = "";
    if (erroConsentimento) erroConsentimento.textContent = "";

    let formularioValido = true;

    if (nome === "") {
        if (erroNome) erroNome.textContent = "Por favor, preencha o seu nome.";
        formularioValido = false;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        if (erroEmail) erroEmail.textContent = "Informe um e-mail válido contendo '@' e '.'.";
        formularioValido = false;
    }

    if (mensagem.length < 20) {
        if (erroMensagem) erroMensagem.textContent = "A mensagem deve ter no mínimo 20 caracteres.";
        formularioValido = false;
    }

    if (!consentimento) {
        if (erroConsentimento) erroConsentimento.textContent = "Você deve concordar com os termos da LGPD.";
        formularioValido = false;
    }

    return formularioValido;
}

function inicializarValidacaoFormulario() {
    const form = document.getElementById("form-contato");
    const msgSucesso = document.getElementById("sucesso-form");

    if (!form) return;

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        if (validarFormulario()) {
            if (msgSucesso) msgSucesso.hidden = false;
            form.reset();

            setTimeout(() => {
                if (msgSucesso) msgSucesso.hidden = true;
            }, 5000);
        } else {
            if (msgSucesso) msgSucesso.hidden = true;
        }
    });
}


function inicializarAnoAutomatico() {
    const spanAno = document.getElementById("ano-atual");
    if (!spanAno) return;

    const anoAtual = new Date().getFullYear();
    spanAno.textContent = anoAtual;
}

function inicializarModalLgpd() {
    const linkTermo = document.getElementById("abrir-modal-lgpd");
    const modalLgpd = document.getElementById("modal-lgpd");
    const btnFechar = document.getElementById("fechar-modal-lgpd");

    if (!linkTermo || !modalLgpd || !btnFechar) return;

    linkTermo.addEventListener("click", (e) => {
        e.preventDefault();
        modalLgpd.hidden = false;
    });

    btnFechar.addEventListener("click", () => {
        modalLgpd.hidden = true;
    });

    modalLgpd.addEventListener("click", (e) => {
        if (e.target === modalLgpd) {
            modalLgpd.hidden = true;
        }
    });
}