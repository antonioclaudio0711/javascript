let vetor = [5, 8, 2, 3, 9];
vetor[2] = 9;

/*
vetor.push() = Forma de se adicionar um valor à mais no vetor, sem saber sua última posição
vetor.length = Determina o tamanho do vetor
vetor.sort() = Organiza os valores do vetor em ordem crescente;
vetor.indexOf() = Mostra a posição do valor inserido na função. Se for procurado um valor inexistente no vetor, o valor -1 é retornado
*/

console.log(vetor)
console.log(`Este vetor possui ${vetor.length} elementos.`);
console.log(`O primeiro valor do vetor é: ${vetor[0]}.`);
console.log(`Os valores do vetor ordenados de forma crescente são: ${vetor.sort()}`);
console.log("Valores do vetor:")
for(let posicao in vetor) { // Versão mais simplificada do "for()" para variáveis compostas
    console.log(`O índice ${posicao} do vetor apresentado possui valor ${vetor[posicao]}.`);
}
console.log(`O valor 2 está na posição ${vetor.indexOf(2)} do vetor.`);

/*
for(let posicao = 0; posicao < vetor.length; posicao++) {
    console.log(`O índice ${posicao} do vetor apresentado possui valor ${vetor[posicao]}.`);
}
*/