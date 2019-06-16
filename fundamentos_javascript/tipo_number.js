let peso1 = 1.1
let peso2 = '2.0'

// Imprimindo o valor das variáveis

console.log(peso1, peso2)

// Convertendo o valor da variável 'num2', que é uma string, e imprimindo no console se ele é inteiro ou não

peso2 = Number(peso2)

console.log(Number.isInteger(peso2))

let av1 = 9.84
let av2 = 4.356

let media = (av1 * peso1 + av2 + peso2) / (peso1 + peso2)

// Imprimindo a média no console com a precisão original
console.log(media)

// Para definir a precisão de casas decimais após a vírgula, basta fazer o seguinte
console.log(media.toFixed(2))

// Exibindo no console convertendo para string
console.log(media.toString())

// Convertendo para binário
console.log(media.toString(2)) // É possível converter para qualquer sistema decimal apenas 
                               // passando o número correspondente a este sistema como parâmetro do método toString 

// Como a string tem preferência, o número que está como string não será transformado para number e a concatenação de string será feita.
console.log('3' + 2)
