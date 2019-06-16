const sequence = {

    _id: 1,
    get id() {return this._id++}
}

const produtos = []

function salvarProduto(produto) {

    if(!produto.id) produto.id = sequence.id

    produtos[produto.id] = produto

    return produto
}

function excluirProduto(id){

    delete produtos[id]
}

function getProduto (id) {

    return produtos[id] || {}
}

function getProdutos() {

    return Object.values(produtos)
}
/*
function alterarProduto(produto) {

    const idProduto = produto.id

    produtos[idProduto].name = produto.name
    produtos[idProduto].price = produto.price
    produto[idProduto].discount = produto.discount

    return produto
}
*/
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}