// Diferentes modos de criação de objeto
// Notação literal
const carro1 = {

    modelo : 'Uno',
    marca: 'Fiat',
    ano: 2001
}

console.log('Literal:', carro1)

// Object em JS
const carro2 = new Object

carro2.modelo = 'Corsa'
carro2['marca'] = 'Chevrolet'
carro2.ano = 2006

console.log('JS Object:', carro2)

// Função construtora
function CarroFuncaoConstrutora(modelo, marca, ano) {

    this.modelo = modelo // PUBLIC

    this.getMarca = () => marca
    this.getAno = () => ano
}

carro3 = new CarroFuncaoConstrutora('Fiesta', 'Ford', 2012)

console.log('Função construtora:', carro3)
console.log(carro3.getAno())

// Função factory
function CarroFuncaoFactory(modelo, marca, ano) {

    return {modelo, marca, ano}
}

carro4 = new CarroFuncaoFactory('Civic', 'Honda', 2004)

console.log('Função Factory:', carro4)

// Object.create
carro5 = Object.create(null)

carro5.modelo = 'Corolla'
carro5.marca = 'Toyota'
carro5.ano = 2004

console.log('Object.create:', carro5)

// JSON.parse
const carro6 = JSON.parse('{"modelo" : "Gol", "marca" : "Volkswagen", "ano" : 2002}')

console.log(carro6)