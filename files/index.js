const fs = require('fs').promises

async function readFile(filePath) {
    try {
    const data = await fs.readFile(filePath)
    console.log(data.toString())
    } catch(err) {
        console.error(`Error al tratar de leer el archico ${err.message}`)
    }

}

readFile('test.txt') // Si fuese otra carpeta, tendríamos que poner el path correcto. -

async function openFile(name, quantity, price) {
    try {
        const csvHeaders = `name, quantity, price`
        await fs.writeFile('test.csv', csvHeaders)
    } catch(error) {
        console.error(`Error al tratar de abrir el archivo ${err.message}`)
    }
} 

async function addTestItem(name, quantity, price) {
    try {
        const csvLine = `\n${name}, ${quantity}, ${price}`
        await fs.writeFile('text.csv', csvLine, {flag: 'a'})
    } catch(error) {
        console.error(`Error al tratar de leer el archico ${err.message}`)
    }
} 

/* (async function() {
    await openFile()
    await addTestItem('papas' , '10', '200')
    await addTestItem('huevos' , '12', '150')
})() */

async function deleteFile(filePath) {
    try {
        await fs.unlink(filePath)
        console.log(`${filePath} borrado.`);
    } catch(error) {
        console.error(`Error al tratar de eliminar el archivo ${err.message}`)
    }
}

deleteFile('test.csv')

async function moveFile(oldPath, newPath) {
    try {
        await fs.rename(oldPath, newPath)
        console.log(`El archivo se movió de ${oldPath} a ${newPath}.`);
    } catch(error) {
        console.error(`Error al tratar de mover/renombrar el archivo ${err.message}`)
    }
}

moveFile('test.txt', './file-store/text.txt')