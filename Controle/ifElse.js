const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else{
        console.log('reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('epa') //cuidado !! ( o texto também é lido como falso e reprova)
