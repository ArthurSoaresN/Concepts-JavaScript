function contar() {

var inicio = document.getElementById('txtinicio')
var fim = document.getElementById('txtfim')
var passos = document.getElementById('txtpassos')
var res = document.querySelector('div#res')


if ((inicio.value.length == 0) || (fim.value.length == 0) || (passos.value.length == 0)) {
    window.alert('Por favor preencha os dados')
}

inicio = Number(inicio.value)
fim = Number(fim.value)
passos = Number(passos.value)

lista = ''

if (passos <= 0) {
    window.alert('Passo Invalido')
}

if ( inicio < fim) {
    for (let contador = inicio; contador <= fim; contador += passos) {
        lista += `${contador} > `
    }
} else {
    for (let contador = inicio; contador>= fim; contador -= passos) {
        lista += `${contador} > `
    }
}

lista += 'FIM'
res.innerHTML = `${lista}`

}
