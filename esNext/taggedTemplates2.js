 
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor: `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real`1x de ${preco} ou 3x de ${precoParcela}.`)


// dolar ( mudar constantes para nao acontecer 'constante representada(preco, parcela) has already been declared)

function dolar(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor: `USD${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const precoEmDolar = 29.9
const parcelaEmDolar = 11
console.log(dolar`1x de ${precoEmDolar} ou 3x de ${parcelaEmDolar}.`)