valores = []

let num = document.getElementById('txtn')
let lista = document.getElementById('tab')
var res = document.querySelector('div#res')

function isNumero (n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou ja presente na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        valores.sort()
        let min = valores[0]
        let max = valores[(valores.length - 1)]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
        }

        media = soma/tot

        res.innerHTML = ''

        if (tot == 1) {

            res.innerHTML += `<p>Ao todo, temos apenas o numero ${max} cadastrado. </p>`
            res.innerHTML += `<p>Maior e menor valor informado foi ${max}. </p>`
            res.innerHTML += `<p>Media da lista: ${max}. </p>`
            
            }
    
        else {
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados. </p>`
        res.innerHTML += `<p>Maior valor informado foi ${max}. </p>`
        res.innerHTML += `<p>Menor valor informado foi ${min}. </p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}. </p>`
        res.innerHTML += `<p>Media da lista: ${media}. </p>`
        }
    }
}