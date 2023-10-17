function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    ficaaqui.innerHTML = ''
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'homem'
            if (idade > 0 && idade <= 10) {
                //Criança
                gen = 'menino'
                img.setAttribute('src', '/JavaScript/CursoEmVideoDeJavaScript/ex015/IMG/menino.jpg')
            } else if (idade >= 11 && idade <= 24) {
                //Jovem
                gen = 'garoto'
                img.setAttribute('src', '/JavaScript/CursoEmVideoDeJavaScript/ex015/IMG/garoto.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', '/JavaScript/CursoEmVideoDeJavaScript/ex015/IMG/homem-adulto.jpg')
            } else {
                //idoso
                gen = 'senhor'
                img.setAttribute('src', '/JavaScript/CursoEmVideoDeJavaScript/ex015/IMG/homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gen = 'mulher'
            if (idade > 0 && idade <= 10) {
                //Criança
                gen = 'menina'
                img.setAttribute('src', '/JavaScript/CursoEmVideoDeJavaScript/ex015/IMG/menina.jpg')
            } else if (idade >= 11 && idade <= 24) {
                //Jovem
                gen = 'garota'
                img.setAttribute('src', '/JavaScript/CursoEmVideoDeJavaScript/ex015/IMG/mulher-jovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', '/JavaScript/CursoEmVideoDeJavaScript/ex015/IMG/mulher-adulta.jpg')
            } else {
                //idoso
                gen = 'senhora'
                img.setAttribute('src', '/JavaScript/CursoEmVideoDeJavaScript/ex015/IMG/mulher-idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        ficaaqui.appendChild(img)
    }
}