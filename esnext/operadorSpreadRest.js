// Operador rest (juntar)/ spread(espalhar)

// Spread com objeto ao espalhar os seus atributos e seus respectivos valores para outro objeto
const produto = {descricao: 'Notebook', preco: 3000}

const outroProduto = { marca: 'Dell', ...produto}

console.log(outroProduto)

// Spread com array
const nomes = ['Weslley', 'Borges', 'Araujo']

const outroNome = ['Alves', ...nomes, 'Ackerman']

console.log(outroNome)