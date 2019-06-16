// '..' serve para ir para o diretório pai e '.' serve para representar o diretório atual
const moduloA = require('../../moduloA') 

//Nota: em sistemas linux, o nome do arquivo é case-sensitive 

const _ = require('lodash')
const moduloRandom = require('modulo_aleatorio') // Só será encontrado o módulo se este possuir o index.js e estiver na pasta 'node_modules'

console.log(_, moduloRandom)

const http = require('http')

http.createServer((req, resp) => {

    resp.write('kkj eae men')
    resp.end()
}).listen(8080)