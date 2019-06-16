const carro = {

    aceleracao: 'Estou acelerando...',
    acelerar () {

        console.log(this.aceleracao)
    }
}

carro.acelerar()

const acelerations = carro.acelerar

acelerations() // Retorna undefined, pois a função 'acelerations' não conhece o atributo 'aceleracao'. Conflito entre paradigmas funcional e OO.

const acelerarCarrito = carro.acelerar.bind(carro)

acelerarCarrito() // A função 'bind()' é utilizado para resolver o 'this' para o objeto passado como argumento. 
                  // O 'this' será resolvido para o objeto 'carro'.
                  // Serve para amarrar ao objeto que será o dono da execução daquele método.