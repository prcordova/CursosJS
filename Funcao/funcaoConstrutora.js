function Carro(velocidadeMaxima = 200, delta = 5) {
// atributo privado
let velocidadeAtual = 0

//metodo publico
this.acelerar = function () {
            if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
            } else { 
                console.log(" Excesso de velocidade, reduz DISGRAÇA !!!")
            velocidadeAtual = velocidadeMaxima
         }
     }
 //metodo publico
    this.getVelocidadeAtual = function () {
         return velocidadeAtual
     }

}
  const Carroça = new Carro(3000, 1000)
  Carroça.acelerar()
  Carroça.acelerar()
  Carroça.acelerar()
  Carroça.acelerar()
  console.log(Carroça.getVelocidadeAtual() + " KM/h ")

  console.log(typeof Carro)
  console.log(typeof Carroça)