//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) //imprime 2 primeiros somando
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8) //ignora apartir do segundo
imprimirSoma()

//funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())