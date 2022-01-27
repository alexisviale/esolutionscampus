const {spawn} = require('child_process')

const child = spawn('grep', ['error', './listFiles.js'])

//callback automatico de salidas
//Escucha cuando se dispara el evento
child.stdout.on('data', data => {
    console.log(`stdout: \n${data}`);
})

child.stderr.on('data', data => {
    console.log(`stderr: \n${data}`);
})

child.on('error', error => {
    console.error(`err: \n${error.message}`);
})

child.on('close', code => {
    console.log(`El proceso secundario terminó con código ${code}`)
})


