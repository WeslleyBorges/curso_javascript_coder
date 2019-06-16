// JSON (JavaScript Object Notation) serve para comunicação entre sistemas, passagem de objetos, ...
const pessoa = {
    nome: 'Weslley',
    idade: 22,
    militar: false,
    local_nascimento: {
        pais: 'Brasil',
        estado: 'Rio Grande do Sul',
        cidade: 'Porto Alegre'
    }
}

// Converte o objeto para o formato textual JSON
let objeto = JSON.stringify(pessoa)

console.log(objeto)

// Converte o JSON para objeto
objeto = JSON.parse(objeto)

console.log(objeto)



