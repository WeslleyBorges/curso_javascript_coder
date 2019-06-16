// Destructuring array
var [a] = [10]

console.log(a) // A partir de uma definição literal de array, a constante 'a' recebeu o valor '10' de um array

var [b, c, d, , e, f = 120] = [70, 80, 90, 100, 110] // Ignorando uma posição e definindo valor padrão para uma posição inacessível do array

console.log(b, c, d, e, f)

// Desetructuring com aninhamento de arrays
var [a, [b, , c, d]] = [[ , 4, 5], [5, 6, , 7]]
/*
 * a = [ <1 empty item>, 4, 5 ]
 * b = 5
 * c = undefined
 * d = 7
 */
console.log(a, b, c, d)

