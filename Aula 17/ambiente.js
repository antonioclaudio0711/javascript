var amigo = {nome:"Antonio",
sexo:"Masculino", 
anos:19,
envelhecer(a=0){
    console.log("Envelheceu!");
    this.anos += a;
}};

amigo.envelhecer(45);
console.log(`O ${amigo.nome} possui ${amigo.anos} anos!`);
