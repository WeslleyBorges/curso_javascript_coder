function fraseAgendada(segundos, frase) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            resolve(frase)
        }, segundos * 1000);
    })
}

fraseAgendada(3, 'Show de bolas')
    .then(frase => {console.log(`A frase é ${frase}`)})
    .catch(console.log('Se falar q funcionou, mentiu'))