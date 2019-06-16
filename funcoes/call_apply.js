function getPreco (imposto = 0, moeda = 'R$') {

    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {

    preco : 300.50,
    desconto : 0.4,
    preco : 99.90,
    getPreco // Devido ao fato de a função já estar declarada no escopo global, somente colocando o nome da função na composição do objeto já irá
             // fazer com que a função esteja presente neste objeto
}

console.log(getPreco()) // Ao invocar o método 'getPreco' desta forma, ele não terá conhecerá valores atribuídos aos atributos 'preco' e 'desconto'
                        // A não ser que fosse definido 'global.preco = x' e 'global.desconto = y'

console.log(produto.getPreco()) // Agora, como ele conhece os valores, o valor é impresso corretamente

/* Utilizando call e apply
   Ambas funções possuem como primeiro parâmetro o contexto no qual ele será executado, no caso, o objeto 'produto'
   
   Especificamente:
   call  - segundo parâmetro em diante: parâmetros da função chamada
   apply - segundo parâmetro: array com os parâmetros da função invocada
*/

const doisNumerosAposCasaDecimal = (valor) => Number(valor).toFixed(2) 

console.log(doisNumerosAposCasaDecimal(produto.getPreco.call(produto, 0.5, 'U$')))
console.log(doisNumerosAposCasaDecimal(produto.getPreco.apply(produto, [0.6, 'E$'])))