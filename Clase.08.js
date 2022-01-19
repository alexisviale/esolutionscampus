// Async - Await

async function func() { // esta función retorna una promesa
    await new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Ocurrio un error.')), 2000)
    })
    /* await new Promise((resolve, reject) => {
        setTimeout(() => resolve('Terminado')), 2000)
    }) */

}

function otherFunc() {
    console.log('Cuerpo de otherFunc');
}

func()
.then(value => console.log(value))
.catch(reason => console.log(reason.message))
otherFunc()


async function func() {
let results = await Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 3000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 2000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 1000)
    })
])

console.log('En el cuerpo de la función.');

return results
}

func().then(value => console.log(value))

console.log('Sigue la ejecución del script.');


// Fetch

fetch('url...')
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log('Ocurrio un error ', + err))

function getParameterValue(param) {
    
}
