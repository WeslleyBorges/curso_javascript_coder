const fs = require('fs')

const caminho = __dirname + '/arquivoLeitura.json'

console.log('Caminho do arquivo JSON:', caminho)

// Leitura síncrona
const content = fs.readFileSync(caminho, 'utf-8')

console.log(content)

// Leitura assíncrona
fs.readFile(caminho, 'utf-8', (err, data) => {

    const content = JSON.parse(data)

    if(!err) console.log(`${content.db.host}:${content.db.port}`)
})

// Leitura de diretórios
fs.readdir(__dirname, (err, files) => {

    const arquivos = files

    arquivos.forEach((conteudo) => {
        console.log(conteudo)
    })

    if(!err) console.log(`Arquivo presentes no diretório ${__dirname}: ${files}`)
})

