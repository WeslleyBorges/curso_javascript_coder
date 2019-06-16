// Função factory com a passagem de parâmetro na construção do objeto
function criarProduto(nome, preco){

    return {
        nome,
        preco,
        desconto : 0.1
    }
}

console.log(criarProduto('Panela', 29.90))