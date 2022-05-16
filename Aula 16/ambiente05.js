//Recursividade
function fatorial(n) {
    if(n == 1) {
        var fat = 1;
    }
    else {
        fat = 1;
        fat = n * fatorial(n-1);
    }
    return fat;
}

console.log(fatorial(5));