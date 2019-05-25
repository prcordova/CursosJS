let valor // não inicializada
console.log(valor)  // undefined ( nao há valor de referência)
//console.log(valor2)  // its not undefined  ( não há variavel valor2)

valor = null // ausência de valor
console.log(valor) 
//console.log(valor.toString()) // erro por tentar acessar algo null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir de forma explicita o undefined
console.log(!!produto.preco)
//delete produto.preco remover o atributo preco do objeto produto...
console.log(produto)

produto.preco = null // sem preco ( gratis)
console.log(!!produto.preco)
console.log(produto)
