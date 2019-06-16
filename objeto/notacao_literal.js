const nome = 'Weslley'
const idade = 22

const pessoa = {nome, idade} // Criando um objeto com as variável já definidas fora do escopo de declaração do objeto
const pessoa2 = {name: nome, age: idade}

console.log(pessoa, pessoa2)

const pessoa3 = {

    falarAlto: function() {

        console.log('itadakimasu'.toUpperCase()) // Forma antiga
    },

    falarBaixo() {

        console.log('itadakimasu'.toLocaleLowerCase()) // Forma nova
    }
}

pessoa3.falarAlto()
pessoa3.falarBaixo()