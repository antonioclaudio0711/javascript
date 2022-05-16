function tabuada() {
    var txtnum = window.document.getElementById("numero");
    var num = Number(txtnum.value);
    var tabuada = window.document.getElementById("select_tabuada");

    if (txtnum.value.length == 0)
    {
        window.alert("Digite um número!");
    }
    else {
        tabuada.innerHTML = "";
        for(let i = 0; i <= 10; i++)
        {
            var item = window.document.createElement("option");
            item.text = `${num} x ${i} = ${num * i}`;
            tabuada.appendChild(item);
        }
    }
}