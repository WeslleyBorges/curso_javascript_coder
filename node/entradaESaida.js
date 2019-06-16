const flagAnonimo = process.argv.indexOf('xd') !== -1

if(flagAnonimo) {
    process.stdout.write('Se falar q esse parametro n existe, mentiu\n')
    process.exit()
}
else {
    process.stdout.write('kkj eae men, ql teu nome? ')
    process.stdin.on('data', (data) => {

        process.stdout.write(`kkj eae ${data}`)
        process.exit()
    })
}