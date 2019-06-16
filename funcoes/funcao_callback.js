const champions = ['Viktor', 'Zed', "Vel'Koz", 'Ashe', 'Vayne']

function printChampionName(indice, nome, shorissa, outro) {
    console.log(`${indice} - ${nome} - ${shorissa} - ${outro}`)
}

champions.forEach(printChampionName) // A função 'forEach' passa três argumentos para a função callback: 
                                     // conteúdo na posição daquele índice, índice e o array completo, respectivamente

champions.forEach((champion, k) => console.log(champion, k))