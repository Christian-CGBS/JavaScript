let num =[5,8,2,9,3]
console.log(`nosso vetor ${num} tem ${num.length} elementos`)
console.log(`o primeiro elemento é o ${num[0]}`)
console.log(`o último elemento é o ${num[num.length-1]}`)
num.sort()
console.log(`nosso vetor ORDENADO ${num} tem ${num.length} elementos`)
console.log(`o primeiro elemento é o ${num[0]}`)
console.log(`o último elemento é o ${num[num.length-1]}`)
num.push(1)
console.log(`o vetor acrescentado de 1 é ${num} e tem agora {num.length} elementos`)
console.log(`o primeiro elemento é o ${num[0]}`)
console.log(`o último elemento é o ${num[num.length-1]}`)
console.log('imprimindo o array usando a estrutura de repetição for')
/* for (var pos=0;pos<num.length;pos++){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
 }
 abaixo o uso do for simplificado para arrays
 */
for (let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
let valor = 9
let pos = num.indexOf(valor)
if (pos == -1) {
    console.log(`Valor ${valor} não foi encontrado!`)
} else {
    console.log(`o valor ${valor} está na posição ${pos}`)
}