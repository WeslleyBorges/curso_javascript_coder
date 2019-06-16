const palavra = 'Weslley'

// Caractere em um índice determinado da string, caso o índice esteja fora dos limmites da string, retornará um valor vazio
console.log(palavra.charAt(3))
console.log(palavra.charAt(400))

// Valor na tabela ASCII (código HTML) de um caractere em um índice determinado
console.log(palavra.charCodeAt(3))

// Índice de um determinado valor na string. É o contrário do método 'charAt'
console.log(palavra.indexOf('y'))

// Pega a string a partir de um determinado índice até o fim dela
console.log(palavra.substring(2))

// Pode-se também tirar uma fatia da string, a partir de um determinado índice até a posição anterior ao segundo parâmetro passado para o substring
console.log(palavra.substring(2, 4))

// Concatenação de strings
console.log(palavra.concat(' Borges').concat(' Araujo'))

// Substitui o conteúdo de um determinado índice por um conteúdo definido
console.log(palavra.replace(1, 'Osu'))

// Quebra a string em um array a partir de um separador passado como parâmetro
console.log('Emma Ray Norman'.split(' '))