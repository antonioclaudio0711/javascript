function carregar() {
    var mensagem = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    mensagem.innerText = `Agora são ${hora} horas.`;
    if(hora >= 0 && hora < 12) {
        mensagem.innerText += " Bom dia!";
        img.src = "fotomanha.png";
        window.document.body.style.background = "#edcdab";
    }
    else if (hora >= 12 && hora < 18) {
        mensagem.innerText += " Boa tarde!";
        img.src = "fototarde.png";
        window.document.body.style.background = "#bbd4ee";
    } 
    else {
        mensagem.innerText += " Boa noite!";
        img.src = "fotonoite.png";
        window.document.body.style.background = "#2a79b4";
    }
}
