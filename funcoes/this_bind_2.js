function Carro(){

    const aceleracao = 5

    this.velocidade = 0

    setInterval(() => {
        
        this.velocidade += aceleracao
        console.log(this.velocidade)

    }, 1000);
}

function Carro2(){

    const aceleracao = 5

    this.velocidade = 0

    setInterval(function(){

        this.velocidade += aceleracao
        console.log(this.velocidade)
    }.bind(this), 1000); // Utilizado 'bind' para amarrar a função passada para o 'setInterval' com a própria função onde foi definida.
}

function Carro3(){

    const aceleracao = 5

    this.velocidade = 0

    const self = this

    setInterval(function(){

        this.velocidade += aceleracao
        console.log(self.velocidade)
    }.bind(self), 1000); // Variável 'self' criada para armazenar o 'this'. Dibre do Ronaldinho.
}

new Carro3