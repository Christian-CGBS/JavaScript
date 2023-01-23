function fatorial(n) {
    res = 1
    for (c=1; c<=n; c++) {
        res = c * res
    }
    return res
}
n = 4
console.log(`o fatorial de ${n} é ${fatorial(n)}`)