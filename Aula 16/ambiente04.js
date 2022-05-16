function fatorial(n) {
    var fat = 1;
    for(var i=n; i>=1; i--)
    {
        fat = fat * i;
    }
    return fat;
}

console.log(fatorial(5));