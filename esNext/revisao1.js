// let e const
{
    var a = 2
    let b= 3
}
console.log(a)
//console.log(b) variavel let é visivel apenas dentro do escopo da variavel, nao fora, tem de por console.log dentro do escopo.

// template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

//destructuring
const [l, e, ...tras] = 'coder'
console.log(l,e,tras)

const [x, y] = [1, 2]
console.log(x, y)

const  {idade: i, nome: n} = {nome: 'Ana', idade: 9}
console.log(i,n)
