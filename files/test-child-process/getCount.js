const slowFunction = () => {
    let count = 0
    while(count < 10000000000) {
        count++
    }
    return count
}

process.on('message', message => {
    if(message == 'START'){
        console.log('El proceso secundario recibió el mensaje START');
        let result = slowFunction()
        let message = `{"Total count" : ${result}}`
        process.send(message)
    }
})

