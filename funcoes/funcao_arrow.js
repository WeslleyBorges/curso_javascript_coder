// Esta função recebe um número como parâmetro e retorna o seu dobro
let dobro = function (a) {
    return 2 * a
}

// Reescrevendo-a como uma função arrow, ela fica da seguinte forma
dobro = a => 2 * a

console.log(dobro(33))

// Função sem parâmetros
let salve = function () {
    return 'kkj eae men'
}

// Transcrita para função arrow
salve = () => 'kkj eae men'

console.log(salve())
