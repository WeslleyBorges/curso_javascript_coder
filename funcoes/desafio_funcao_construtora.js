let carro

class CarroC {

    constructor(nome, vel_max){

        this.nome = nome,
        this.vel_max = vel_max
    }

    acelerar(){

        console.log(`Eu sou um ${this.nome} e estou acelerando até o limite de ${this.vel_max} km/h.`)
    }
}

carro = new CarroC('Corsa', 220)

carro.acelerar()

criarCarro = (nome, vel_max) => {

    return { acelerar: () => console.log(`Eu sou um ${nome} e estou acelerando até o limite de ${vel_max} km/h.`) } 
}

carro = criarCarro('Corsa', 220)

carro.acelerar()

function CarroF(nome, vel_max){

    return {

        acelerar: () => console.log(`Eu sou um ${nome} e estou acelerando até o limite de ${vel_max} km/h.`)
    }
}

carro = CarroF('Corsa', 220)

carro.acelerar()