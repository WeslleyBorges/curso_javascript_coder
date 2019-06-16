// middleware pattern (chain of responsability)

const step1 = (context, next) => {

    context.value1 = 'First'
    next()
}

const step2 = (context, next) => {

    context.value2 = 'Second'
    next()
}

const step3 = (context) => context.value3 = 'Third'

const exec = (context, ...middlewares) => {

    const execPasso = (indice) => {

        middlewares && indice < middlewares.length && middlewares[indice](context, () => execPasso(indice + 1))
    } 

    execPasso(0)
}

const context = {}

exec(context, step1, step2, step3)

console.log(context)
