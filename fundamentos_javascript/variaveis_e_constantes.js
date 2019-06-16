//Por regras gerais, criar variáveis usando 'let'.

var a = 3
let b = 4

console.log(a, b)

// É impossível redeclarar uma variável dentro de um mesmo escopo usando 'let', logo, gerará um erro na execução deste trecho de código

var a = 30
//let b = 40

/* Porém, é possível redefinir um valor para esta variável que foi declarada através da palavra reservada 'let', 
 * assim como na maioria das linguagens C-like
 */
b = 50 

console.log(a, b)

const c = 6

// Não é possível reatribuir um valor para a variável declarada através de 'const', pois é uma constante e possui um vallor fixo.
// Assemelha-se com o 'final' da linguagem Java
c = 60