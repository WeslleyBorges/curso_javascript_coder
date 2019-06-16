// Template string permite que a string possa receber um argumento dentro da sua própria construção delimmitada por crases
// Template string suporta quebra de linha

const nome = 'Weslley'
const template = `kkj 
                    eae 
                        ${nome}`

console.log(template)

// Template string pode receber até expressões matemáticas dentro das chaves onde o argumento será passado

let expressao = `1 + 1 = ${1 + 1}`

console.log(expressao)

// Também é possível retornar string de função arrow

let funcao_arrow = numero => Math.sqrt(numero)

console.log(`A raiz quadrada de 25 é igual a ${funcao_arrow(25)}`)