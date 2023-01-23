// RECURSIVIDADE - a função que chama ela mesma
function fatorial(n){
    if (n == 1) {
        return 1
    } else {
        return n * fatorial (n - 1)
    }
}

n = 5
console.log(`o fatorial de ${n} é ${fatorial(n)}`)