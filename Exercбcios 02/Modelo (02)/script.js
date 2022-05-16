function verificar() {
    var data =  new Date();
    var ano_atual = data.getFullYear();
    var txt_ano = window.document.getElementById("txtano");
    var ano = Number.parseFloat(txt_ano.value);
    var resultado = window.document.getElementById("resposta");

    if(txt_ano.value.length == 0 || txt_ano.value > ano_atual)
    {
        window.alert("Verifique os dados inseridos e tente novamente!");
    }
    else {
        var sexo = window.document.getElementsByName("radio_sexo");
        var idade = ano_atual - ano;
        var genero = "";
        var imagem = window.document.createElement("img");
        imagem.setAttribute("id", "foto");

        if(sexo[0].checked) {
            genero = "homem";
            if (idade >=0 && idade < 10) {
                //Criança
                imagem.setAttribute("src", "bebehomem.png");
            }
            else if (idade >= 10 && idade < 18) {
                //Jovem
                imagem.setAttribute("src", "jovemhomem.png");
            }
            else if (idade >= 18 && idade < 60) {
                //Adulto
                imagem.setAttribute("src", "adultohomem.png");
            }
            else {
                //Idoso
                imagem.setAttribute("src", "idosohomem.png");
            }
        }
        else {
            genero = "mulher";
            if (idade >=0 && idade < 10) {
                //Criança
                imagem.setAttribute("src", "bebemulher.png");
            }
            else if (idade >= 10 && idade < 18) {
                //Jovem
                imagem.setAttribute("src", "jovemmulher.png");
            }
            else if (idade >= 18 && idade < 60) {
                //Adulto
                imagem.setAttribute("src", "adultomulher.png");
            }
            else {
                //Idoso
                imagem.setAttribute("src", "idosomulher.png");
            }
        }
        resultado.style.textAlign = "center";
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(imagem);
        imagem.style.padding = "10px";
    }
}