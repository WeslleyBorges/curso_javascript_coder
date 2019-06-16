// Além dos valores default 'true' e 'false' utilizados para representar os booleanos, pode-se também utilizar outras expressões
let boolean = 1

// Utiliza-se o operador '!' para fazer uma conversão forçada do valor para boolean
console.log(!!boolean)

// Expressões verdadeiras
// Números diferentes de 0
console.log(!!4)
console.log(!!-123)

// Espaços em branco e texto normal
console.log(!!' ')
console.log(!!'   ')
console.log(!!'xurympe')

// Array sem elementos
console.log(!![])

// Objeto
console.log(!!{})

// Tipo infinito
console.log(!!Infinity)
console.log(!!(7 / 0))

// Resultado da atribuição, podendo ser verdadeiro ou falso a depender do valor sendo atribuído
console.log(!!(boolean = 20))

// Expressões falsas
// O número 0
console.log(!!0)

// String vazia
console.log(!!'')

// Null, NaN e undefined
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

// Vai retornar o valor verdadeiro da expressão
// Caso o nome não seja preenchido, irá exibir o outro valor
const nome = ''

console.log(nome || 'Zé ninguém')