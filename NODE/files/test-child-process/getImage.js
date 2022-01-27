const {execFile} = require('child_process')

execFile(__dirname + '/file.sh', (error, stdout, stderr) => {

    if(error) {
        console.error(`error: \n${error.message}`);
        return
    }
    if(stderr) {
        console.error(`stderr: \n${stderr}`);
        return
    }
    console.log(`stdout: \n${stdout}`);

})