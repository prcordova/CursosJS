// par nome/valor
const saudacao = 'Opa' // contexto léxico 1 ( local aonde a variavel foi definida)

function exec() {
    const saudacao =' Falaaa' //contexto léxico 2 ( local aonde foi definido dentro do contexto da funcao)
    return saudacao
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)