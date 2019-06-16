const fs = require('fs')

const caminho = __dirname + '/arquivoEscrita.json'

const produto = {

    descricao: 'Notebook',
    marca: 'Dell',
    preco: 3000,
    desconto: 0.15
}

fs.writeFile(caminho, JSON.stringify(produto), err => {

    console.log(err || 'A escrita do arquivo foi realizada com sucesso!') 
    
})

// Lendo e escrevendo 

fs.readFile(caminho, 'utf-8', (err, data) => {

    const conteudo = JSON.parse(data)

    const novoProduto = {
        descricao: 'Carro',
        marca: 'Toyota',
        preco: 50000,
        desconto: 0.05
    }
    
    fs.writeFile(caminho, JSON.stringify([conteudo, novoProduto]), (err) => { // Array de objetos convertidos para JSON e escritos no arquivo

        console.log(err || 'Arquivo escrito com sucesso!')
    })
})