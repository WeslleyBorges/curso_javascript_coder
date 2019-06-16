// Definição da function Pessoa
function Pessoa()  {

    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
        
    }, 500)
}

new Pessoa // Ao instanciar o objeto, de 500 em 500 ms, o atributo 'idade' é incrementado e exibido no console