// nao aceita repeticao / nao indexada
const times = new Set()
times.add('Vasco')
times.add('Sao paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamento'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)