
const rand = ({ min = 0, max = 100 }) /** Valores padrões */=> {

                    let aux = Math.random() * (max - min) + min    
                    return Math.floor(aux)                
                }

console.log(rand({min: 50, max: 60})) // Destructuring através de objeto passado por parâmetro

const rand2 = ([min = 0, max = 100]) => {
    
    if (min > max) [min, max] = [max, min]

    let aux = Math.random() * (max - min) + min    
    
    return Math.floor(aux)    
}

console.log(rand2([]))