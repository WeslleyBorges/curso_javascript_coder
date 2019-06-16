// A classe map serve para 'mapear' tipos de dados com chaves e valores

const pessoa = new Map()

pessoa.set('nome', 'Weslley')
console.log(pessoa.get('nome'))

// Objeto
const produto = new Map()

produto.set('notebook', {marca: 'Dell', preco: 3000})

console.log(produto.get('notebook').marca)

const chavesVariadas = new Map([

    [function() {}, 'Isto é uma função'],
    [{descricao: 'Objeto'}, 'Isto é um objeto'],
    [123, 'It is a number']
])

chavesVariadas.forEach((valor, chave) => {

    console.log(chave, valor)
})

// .has verifica se tal chave está presente no map
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.has('chave'))

// Deletando a chave '123'...
chavesVariadas.delete(123)

// ...ela passa a não existir mais
console.log(`Chaves variadas possui '123'? ${chavesVariadas.has(123)}`)