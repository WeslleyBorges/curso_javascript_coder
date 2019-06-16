// Armazenando a função em uma variável
const imprimirSoma = function (a, b) {
    return a + b
}

console.log(imprimirSoma(2, 3))

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => a + b

console.log(soma(2, 3))

// Testando loop...
const sequencia = (limite) => {

    for(i = 1; i <= limite; i++)
        console.log(i)
}

sequencia(10)