function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`

    if (hora >= 0 && hora < 6) {
        img.src = '/JavaScript/CursoEmVideoDeJavaScript/ex014/IMG/madrugada.jpg'
        document.body.style.background = 'rgb(5, 8, 55)'
        //madrugada
    } else if (hora >= 6 && hora < 12) {
        //Manhã
        img.src = '/JavaScript/CursoEmVideoDeJavaScript/ex014/IMG/manha.jpg'
        document.body.style.background = 'rgb(111, 151, 252)'
    } else if (hora >= 12 && hora < 18) {
        //Tarde
        img.src = '/JavaScript/CursoEmVideoDeJavaScript/ex014/IMG/tarde.jpg'
        document.body.style.background = 'rgb(231, 147, 45)'
    } else {
        //Noite
        img.src = '/JavaScript/CursoEmVideoDeJavaScript/ex014/IMG/noite.jpg'
        document.body.style.background = 'rgba(9, 10, 81, 0.917)'
    }
}
