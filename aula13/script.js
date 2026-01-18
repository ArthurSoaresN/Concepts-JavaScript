function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    verificador_idade = 1

    if (Number(fano.value) < 1900) {
        window.alert('Erro, Verifique os dados, preencha e tente novamente')
        verificar_idade = 0
    }

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro, Verifique os dados, preencha e tente novamente')
    } 
    
    if (verificador_idade){
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 11) {
                // kid
                img.setAttribute('src', 'criancam.png')
            } else if (idade >= 11 && idade <= 21) {
                // Jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade > 21 && idade <= 55) {
                // adulto
                img.setAttribute('src', 'adultom.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosom.png')
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 11) {
                // kid
                img.setAttribute('src', 'criancaf.png')
            } else if (idade >= 11 && idade <= 21) {
                // Jovem
                img.setAttribute('src', 'jovemf.png')
            } else if (idade > 21 && idade <= 55) {
                // adulto
                img.setAttribute('src', 'adultof.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosof.png')
            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}