function parimpar (n) {
    if (n%2 == 0) {
        return 'Par'
    }   else {
        return 'Impar'
    }
}

console.log(parimpar(203))

function soma (n1 = 0 , n2 = 0) {
    return n1 + n2
}

console.log(soma(2, 5))

let v = function(x) {
    return x*2
}

console.log(v(2))

function fatorial (n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

function fat (n) {
    if (n == 1) {
        return 1
    } else {
        return n * fat(n-1)
    }
}

console.log(fat(5))