function contar() {
    var txtinicio = window.document.getElementById("numeroinicio");
    var inicio = Number(txtinicio.value);
    var txtfinal = window.document.getElementById("numerofinal");
    var final = Number(txtfinal.value);
    var txtpasso = window.document.getElementById("incremento");
    var passo = Number(txtpasso.value);
    var resultado = window.document.getElementById("resposta");

    if (txtinicio.value.length == 0 || txtfinal.value.length == 0 || txtpasso.value.length == 0) {
        window.alert("Insira algum número em todos os espaços!")
    }
    else {
        if (passo <= 0) {
            window.alert("Passo inválido! Considerando passo = 1");
            passo = 1;
        }

        resultado.innerHTML = "Contando: <br>";

        if (inicio < final) { //Contagem crescente
            for(var i = inicio; i <= final; i = i + passo) {
                resultado.innerHTML += `[${i}] `;
            }    
        }
        else { //Contagem decrescente
            for(var i = inicio; i >= final; i = i - passo) {
                resultado.innerHTML += `[${i}] `;
            }
        }
    }
}