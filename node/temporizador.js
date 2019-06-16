const schedule = require('node-schedule')

let count = 1

const tarefa1 = schedule.scheduleJob('*/2 * * * * *', function() {

    console.log(`Executando a tarefa pela ${count++} ª vez xD às ${new Date()}`) 
})

setTimeout(function() {

    tarefa1.cancel()
    console.log('Parei com essa caceta!')
    
}, 20000)

const regra = new schedule.RecurrenceRule()

regra.dayOfWeek = [new schedule.Range(0, 1)]
regra.second = 1

const tarefa2 = schedule.scheduleJob(regra, function() {

    console.log('Executando a tarefa 2!!!')
})