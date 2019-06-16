// A palavra reservada 'let' é utilizada para declarar uma variável dentro de um escopo local, enquanto 
// 'var' é utilizada para escopo global

var numero = 2
{
    var numero = 3
    console.log('Escopo local =', numero)
}

console.log('Escopo global =', numero) // Neste caso, a declaração com 'var' fez com que a variável 'numero' fosse sobrescrita

let letra = 'a'

{
    let letra = 'b'
    console.log('Escopo local =', letra)
}

console.log('Escopo global =', letra) // Nesta caso, a declaração com 'let' fez com que a variável 'letra' tivesse seu escopo respeitado