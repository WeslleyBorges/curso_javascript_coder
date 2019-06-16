// A função factory envolve a criação de uma função que retorna uma objeto para evitar a codificação repetitiva

// Factory simples
let obj

function criarCarro() {
    return {
        modelo: 'Corsa',
        ano: 2006,
        marca: 'Chevrolet'
    }
}