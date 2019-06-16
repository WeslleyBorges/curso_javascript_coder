/* Objeto constante pode ser alterado, pois um objeto possui um identificador que é do tipo referência, logo, os valores de seus 
   atributos pode ser alterados, exceto o endereço de memória para o qual este rótulo aponta.
*/
const pessoa = {
    nome: 'Weslley'
}

console.log('Original:', pessoa)

pessoa.nome = 'Hyakkimaru'

console.log('Alterado:', pessoa)

/*
Vai quebrar, pois o endereço de memória para o qual este rótulo aponta deve ser constante
pessoa = {
    xisde: 40
} 
*/

// Impede que os atributos no objeto sejam alterados, congelando-o
Object.freeze(pessoa)

pessoa.nome = 'Xisde'

console.log('Após o freeze: ', pessoa)