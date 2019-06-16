const notas = [3, 4.4, 6.1, 7, 8.5, 2.4]

let notas_baixas = []

// Filtrando sem callback
for(let i in notas){ // A variável 'i' percorre os índices
    if(notas[i] < 7)
        notas_baixas.push(notas[i])
}

console.log(notas_baixas)

notas_baixas = []

const notaBaixaCondicao = value => value < 7

// Filtrando com callback a partir da função 'filter'
notas_baixas = notas.filter(notaBaixaCondicao) // A cada iteração a função 'filter' vai avaliar se o valor naquele posição do array atende à condição.
                                                  // Caso atenda, é retornado 'true' e o valor na posição em questão é adicionado ao sub-array que será retornado

console.log(notas_baixas)
