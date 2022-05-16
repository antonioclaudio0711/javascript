var txtnum = window.document.getElementById("numero");
var lista = window.document.getElementById("select_array");
var resultado = window.document.getElementById("resposta");
var vetor = [];

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    }
    else {
        return false;
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true;
    }
    else {
        return false;
    }
}

function adicionar() {
    if(isNumero(txtnum.value) && !inLista(txtnum.value, vetor)) {
        vetor.push(Number(txtnum.value));
        var item = window.document.createElement("option");
        item.text = `Valor ${txtnum.value} adicionado!`;
        lista.appendChild(item);
        resultado.innerHTML = "";
    }
    else {
        window.alert("Valor inválido ou já encontrado na lista!");
    }
    txtnum.value = "";
    txtnum.focus();
}

function finalizar() {
    if(vetor.length == 0) {
        window.alert("Adicione valores antes de finalizar!");
    }
    else {
        var total = vetor.length;
        var maior = vetor[0];
        var menor = vetor[0];
        var soma = 0;
        var media = 0;

        for (var posicao in vetor) {
            if(vetor[posicao] > maior) {
                maior = vetor[posicao];
            }
            else if (vetor[posicao] < menor) {
                menor = vetor[posicao];
            }
            soma = soma + vetor[posicao];
        }
        media = soma / total;

        resultado.innerHTML = "";
        resultado.innerHTML += `<p>Ao todo, o vetor possui ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado é: ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado é: ${menor}.</p>`
        resultado.innerHTML += `<p>A soma de todos os valores informados é: ${soma}.</p>`
        resultado.innerHTML += `<p>A média de todos os valores informados é: ${media}.</p>`
    }
}