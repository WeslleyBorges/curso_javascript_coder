const pessoa = {

    nome: 'Weslley',
    idade: 22,
    peso: 80
}

console.log(Object.keys(pessoa)) // Pega as chaves de um objeto e os retorna em um array
console.log(Object.values(pessoa)) // Pega os valores de um objetos e os retorna em um array
console.log(Object.entries(pessoa)) // Retorna tanto as chaves quanto os valores

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]} : ${element[1]}`)
});

Object.entries(pessoa).forEach(([key, value]) => { // Utilizando destructuring
    console.log(`${key} : ${value}`)
});

//  Definindo propriedades para o objeto
Object.defineProperty(pessoa, 'altura', {
    enumerable: true,
    writable: false,
    value: 1.78
})

console.log(pessoa)

// 'Object.assign' passa os atributos de objetos origem para o objeto destino
let eu = {nome: 'Weslley'}
let eu_2 = {peso: 80, altura: 1.78}
let eu_3 = {nome: 'Borges'}

let novo = Object.assign(eu, eu_2, eu_3)

console.log(novo) // Se os objetos origem e destino tiverem atributos iguais, o valor será sobrescrito