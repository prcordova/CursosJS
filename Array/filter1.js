const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true, util: true},
    {nome: 'Cadeira', preco: 40, fragil: true, util: true},
    {nome: 'Silicone', preco: 12000, fragil: true, util: true},
    {nome: 'carro', preco: 25000, fragil: true, util: false}
]




console.log(produtos.filter(function(p) {
    return false
    
}))

const caro = produto => produto.preco >= 50
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))