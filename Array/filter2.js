Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true, util: true},
    {nome: 'Cadeira', preco: 40, fragil: true, util: true},
    {nome: 'Silicone', preco: 12000, fragil: true, util: true},
    {nome: 'carro', preco: 25000, fragil: true, util: false}
]

const caro = produto => produto.preco >= 5000
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))