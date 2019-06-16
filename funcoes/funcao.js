function soma (a, b = 1){ // Função definida com a respnsabilidade de imprimir a soma de dois números na tela
    console.log(a + b)    // Valor padrão '1' definido para o parâmetro 'b'
}

soma(7, 7) // Passando os valores normalmente por argumento
soma() // Caso não se passe argumentos, a menos que os parâmetros tenham valor padrão para eles definidos, o retorno será 'NaN'
soma(1, 2, 3) // Caso sejam passados mais valores que o necessário, serão considerados somente esses parâmetros necessários
soma(9) // NEste caso, como possuo um valor definido para o parâmetro 'b', a soma poderá ser feita