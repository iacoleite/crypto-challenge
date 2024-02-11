let mensagem = "";
let novaMensagem = '';
let dicionario = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
};


function desapareceCopia() {
    let botao = document.getElementById('botaoCopia');
    botao.style.display = none;
}


// insere o texto na tag no HTML
function exibirTextoNaTela(tag, texto) {
    let campo = document.getElementById(tag);
    campo.textContent = texto;
}

/* pega a input do usuário no textArea */
function getInput() {
    let texto = document.getElementById('texto_inicial');
    mensagem = texto.value;
    return mensagem;
    
}

// Apaga campo input
function eraseInput() {
    let texto = document.getElementById('texto_inicial');
    texto.value = '';
}

/* substitui caracteres com base no dicionario */ 
function criptografar() {
    novaMensagem = '';
    getInput();
    if (mensagem == '') {
        return
    } else {
    for (let letra of mensagem) {
        if (letra in dicionario) {
            novaMensagem += dicionario[letra];
        } else {
            novaMensagem += letra;
        }
    }
    document.getElementById("svgFeio").style.display = "none";
    document.getElementById("observacao").style.display = "none";
    exibirTextoNaTela('resultado', novaMensagem);
    eraseInput();
    document.getElementById("botaoCopia").style.display = "inline"
    
}
}
// substitui caracteres com base no dicionario reverso
function descriptografar() {
    getInput();
    if (mensagem == '') {
        return
    } else {
    novaMensagem = mensagem;
    for (let i in dicionario) {
        novaMensagem = novaMensagem.split(`${dicionario[i]}`).join(`${i}`);
        console.log(i);
        console.log(novaMensagem);
    }
    //novaMensagem = mensagem.split('ai').join('a').split('enter').join('e').split('imes').join('i').split('ober').join('o').split('ufat').join('u');
    exibirTextoNaTela('resultado', novaMensagem);
    eraseInput();
}
}
function copiar() {
    let copyText = document.getElementById('resultado');
    navigator.clipboard.writeText(copyText.textContent);
    
}

function alteraTema() {
    linkcss = document.getElementById('estilo');
    console.log(linkcss);
    if (linkcss.href.includes("style.css")) {
        linkcss.href = "./styleAlura.css";
        document.getElementById('texto_inicial').placeholder = 'Você achou e não gostou do easterEgg do Careca! :(';
    } else { 
        linkcss.href = "style.css"
        document.getElementById('texto_inicial').placeholder = 'Você achou o easterEgg do Careca!';
    }
}