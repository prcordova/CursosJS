function Pessoa() {
    this.idade = 0

    setInterval(() => {
       this.idade++
       console.log("pika" + this.idade) 
    }, 1000)
}

new Pessoa