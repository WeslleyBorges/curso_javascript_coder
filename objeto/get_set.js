const pessoa = {

    nome: 'Weslley',
    _idade: 22, // O '_' como primeiro caractere do nome do atributo indica, por convenção, que aquele atributo é privado
    get idade() { return this._idade },
    set idade(valor) {

        if(valor > -1) {
            this._idade = valor
        }        
    }
}

console.log(pessoa.idade)

pessoa.idade = 23

console.log(pessoa.idade)