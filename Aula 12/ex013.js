var agora = new Date();
var dia_semana = agora.getDay();
/*
Os dias da semana são: Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado. No JavaScript é realizada a seguinte relação: Domingo(0), Segunda(1), Terça(2), Quarta(3), Quinta(4), Sexta(5) e Sábado(6).
*/
switch (dia_semana) {
    case 0:
        console.log("Domingo");
        break;
    
    case 1:
        console.log("Segunda-feira");
        break;

    case 2:
        console.log("Terça-feira");
        break;

    case 3:
        console.log("Quarta-feira");
        break;

    case 4:
        console.log("Quinta-feira");
        break;

    case 5:
        console.log("Sexta-feira");
        break;

    case 6:
        console.log("Sábado");
        break;

    default:
        console.log("[ERRO] Dia inválido!");
        break;
}