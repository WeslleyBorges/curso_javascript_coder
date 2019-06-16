// Criação do objeto sem atributos
let pessoa = {}

// Criação dinâmica dos seus atributos
pessoa.nome = 'Weslley'
pessoa.data_nascimento = new Date('1996-12-29') 

console.log(pessoa)

// Para chave-valor semelhante ao dictionary do C#
pessoa['altura'] = 1.78

console.log(pessoa)

// Criando os atributos dentro da própria declaração do objeto
let animal = {especie: 'Gato', comprimento: 55, altura: 25}

console.log(animal)

// Este objeto pode ter objetos aninhados
animal.raca = {descricao: 'Listrada', comportamento: {descricao: 'dócil e kawaii'}} // Descrição aparece duas vezes, pois o identificador 
                                                                                    // deve ser único apenas dentro do objeto ao qual pertence

console.log(animal.raca.comportamento.descricao)

// Transformando o meu objeto 'pessoal' em JSON (JavaScript Object Notation), ficaria da seguinte forma
' { "nome":"Weslley", "data_nascimento":"29/12/1996" } '