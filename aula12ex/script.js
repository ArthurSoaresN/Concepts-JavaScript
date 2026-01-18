function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    hora = 2

    if (hora == 1) {
        msg.innerHTML = `Agora é ${hora} hora.`
    } else {
        msg.innerHTML = `Agora são ${hora} horas.`
    }

    if (hora >= 0 && hora < 12){
        // bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#fdee95'
    }

    else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#df9963'
    }

    else {
        // boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#142b3b'
    }


}