// Uma função anônimaé uma função que não possui nome
const exponenciacao = function (base, exp) {
    return Math.pow(base, exp)
}

// Definição de uma função com três parâmetros e, por padrão, o terceiro parâmetro receberá a função anônima armazenada na constante 'exponenciacao'
function printResult (b, e, exp = exponenciacao) {
    console.log(exp(b, e))
}

printResult(5, 2) 
printResult(5, 2, exponenciacao)

printResult(5, 2, function(x, y) { // Passagem de função anônima na chamada da função
    return x - y
})

printResult(5, 2, (x, y) => 5 * 2)

const maluco = {
    mandar_um_salve: _ => console.log('kkj eae men')
}

maluco.mandar_um_salve()