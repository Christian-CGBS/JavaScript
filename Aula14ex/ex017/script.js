function gerar(){
    var num = document.getElementById('ent')
    var tab = document.getElementById('seltab')
    // var res = document.getElementById('res')
    var n = Number(num.value)
    if (num.value.length == 0) {
        window.alert('[ERRO] digite um número')
    } else {
        tab.innerHTML =''
        for (var c=0; c<=10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            // var calc = n * c
            // res.innerHTML += `${n} x ${c} = ` + calc +'<br>'
        }
    }
}