const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {

    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res) => {

    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {

    const produto = bancoDeDados.salvarProduto({

        name: req.body.name,
        price: req.body.price,
        discount: req.body.discount
    })

    res.send(produto)
})

app.put('/produtos/:id', (req, res) => {

    const produto = bancoDeDados.salvarProduto({

        id: req.params.id,
        name: req.body.name,
        price: req.body.price,
        discount: req.body.discount
    })

    res.send(produto)
})

app.delete('/produtos/:id', (req, res) => { 

    bancoDeDados.excluirProduto(req.params.id)

    res.send(bancoDeDados.getProdutos())
})

app.listen(porta, () => {

    console.log(`A aplicação está rodando na porta ${porta}`)
})