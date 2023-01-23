let tab = document.getElementById('listatab')
let numtxt = document.getElementById('ntxt')
let res = document.querySelector('div#res')
let valores = []

// função para verificar a validade da entrada
// n = número

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100 && n.length != 0) {
        return true // valor está no intervalo
    } else {
        return false // valor fora do especificado
    }
}

// função para verificar se o número já existe
// n = número , l = lista

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true // valor já existe
    } else {
        return false // valor não existe
    }

}

function coletar(){
    if (isnumero(numtxt.value) && !inlista(numtxt.value, valores)) {
        valores.push(Number(numtxt.value))        
        var item = document.createElement('option')
        item.text = `valor ${numtxt.value} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('valor inválido ou já existente')
    }
    numtxt.value = ''
    numtxt.focus()
}

function analisar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let soma = 0
        // let media = 0
        for (let pos in valores){
            soma += valores[pos]
        }
        // let media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>ao todo tem-se ${tot} elementos cadastrados</p>`
        valores.sort()
        res.innerHTML += `<p> o maior valor é ${valores[valores.length-1]}</p>`
        res.innerHTML += `<p> o menor valor é ${valores[0]}</p>`
        res.innerHTML += `<p> a soma vale ${soma}</p>`
        res.innerHTML += `<p> a média resulta em ${soma/tot}</p>`

    }
}

/* 
function coletar(){
    var pos = 0
    if (ntxt.value.length == 0 || ntxt.value < 1 || ntxt.value> 100){
        window.alert('[ERRO] Informe um número dentro do intervalo especificado!')
    } else {
        var lista[pos] = Number(ntxt)
        tab.innerHTML=''
        var n = Number(ntxt.value)
        var item = document.createElement('option')
        item.text = `valor ${n} adicionado`
        tab.appendChild(item)
        var pos++

    }
} */