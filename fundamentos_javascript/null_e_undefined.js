// O undefined considera que o rótulo que aponta para um endereço de memória,
// ou seja, o seu identificador, foi declarado, mas não inicializado.
let valor 

console.log(valor)

valor = null

// Agora, o identificador passou a apontar para nenhum endereço de memória após defini-lo como 'null' 
console.log(valor)

const objeto = {nome: 'Weslley'}

console.log(objeto)

delete objeto.nome // Para excluir o atributo de um objeto

console.log(objeto)

