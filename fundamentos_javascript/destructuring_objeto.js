// Formas de instanciar um objeto

// Durante a declaração
const pessoa = {
    nome: 'Weslley',
    idade: 22
}

const { nome, idade } = pessoa // Destructuring

console.log(nome, idade, pessoa)

// Através de uma função

function Animal(especie, comprimento){

    this.especie = especie
    this.comprimento = comprimento
}

const animalzinho = new Animal('Gato', 50)

const { especie, comprimento } = animalzinho // Destructuring

console.log(especie, comprimento, animalzinho)

/* Através de uma classe pré-definida
class Carro {

    this.modelo = modelo
    this.marca = marca
    this.ano = ano
}*/

const objeto = {
    
    nome: 'Bola',
    tipo: {
        descricao: 'utensílio doméstico'
    }
}

// Para o nome do atributo do objeto não ficar amarrado a um nome de variável específico, pode-se criar um outro identificador para ele
const { nome: nome_do_objeto, naoExistemEmObjeto = 'Valor padrao' } = objeto

// Para não correr o risco do atributo não existir ou ele não possuir valor par aele atribuído, pode-se definir um valor padrão para ele

console.log(nome_do_objeto, naoExistemEmObjeto)

// Destructuring de objeto aninhado
const { tipo } = objeto // Objeto completo

console.log(tipo.descricao)

const { tipo: { descricao, tamanho = 90 } } = objeto // Somente atributos do objeto

console.log(descricao, tamanho)