function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value < 0 || fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Ano inválido!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade < 14) {
                // criança
                img.setAttribute('src','foto_homem_bebe.jpg')
            } else if (idade < 18) {
                // adolescente
                img.setAttribute('src','foto_homem_jovem.jpg')
            } else if (idade < 65) {
                // adulto
                img.setAttribute('src','foto_homem_adulto.jpg')
            } else {
                // idoso
                img.setAttribute('src','foto_homem_idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade < 14) {
                // criança
                img.setAttribute('src','foto_mulher_bebê.jpg')
            } else if (idade < 18) {
                // adolescente
                img.setAttribute('src','foto_mulher_jovem.jpg')
            } else if (idade < 65) {
                // adulto
                img.setAttribute('src','foto_mulher_adulta.jpg')
            } else {
                // idoso
                img.setAttribute('src','foto_mulher_idosa.jpg')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}