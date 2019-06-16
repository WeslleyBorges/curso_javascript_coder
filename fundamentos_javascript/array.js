// Em JavaScript, um array pode conter elementos de diferentes tipos

// Array declarado de forma literal
let array1 = [5.5, 'Almoço', {x: 2, y: 'banana'}]

console.log(array1[0], array1[1], array1[2].y)

// Ao tentar acessar um posição não definida no array, o retorno é 'undefined'
console.log(array1[8000])

// Ao definir um valor para a posição de um array em que as anteriores não possuem elementos, o array fica com as posições vazias (avá)

array1[8000] = !!1

console.log(array1)

// 'length' é a propriedade do array que simboliza o número de elementos que ele possui
console.log('O array tem', array1.length, 'elementos.')
console.log(`O array tem ${array1.length} elementos. -> Utilizando template string`)

// Para adicionar valores ao fim do array
array1.push({id: 1, nome: 'Weslley'}, null, false, 4.5, 22)

console.log(array1)

// Para remover da ultima posição do array
array1.pop()

console.log(array1)

// Para remover de uma posição específica
delete array1[1]

console.log(array1)

// Array é do tipo object
console.log(typeof array1)