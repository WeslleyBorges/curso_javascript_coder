function Pessoa(nome) {
    
    // Atributo privado que não é visível fora do escopo da classe do objeto
    let apelido = 'nick'

    // Atributo público
    this.nome = nome

    // Método para acessar o atributo privado 'apelido' de pessoa
    // Utilizar a palavrinha reservada 'this' para ser visível do lado de fora do escopo
    this.getApelido = function() {
        return apelido
    }
}

const pessoa = new Pessoa('Weslley')

console.log(pessoa.nome, pessoa.apelido, pessoa.getApelido())