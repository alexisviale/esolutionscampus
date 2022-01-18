// Promesas, async, await --- ASINCRONISMO

function loadScript(src) {
    let script = document.createElement('script')
    script.src = src
    document.head.append(script)
}


function loadScript(src) {
    setTimeout(() => {
        let script = document.createElement('script')
        script.src = src
        document.head.append(script)
    }, 1000)
}

let promise = new Promise(function(resolve, reject){
    // Acá escribo el código productor.
    setTimeout(() => resolve('Listo!'), 1000)
})

let promise = new Promise(function(resolve, reject){
    // Acá escribo el código productor.
    let rnd = Math.round(Math.random())
    if(rnd) {
        setTimeout(() => resolve('Listo!'), 1000)
    } else {
        setTimeout(() => reject(new Error('Ay!')), 1000)
    }   
})

promise
.then(
    function(result) {
        console.log(result)
    }
)
.catch(function(error) {
    console.log(error);
})
.finally(
    function() {
        console.log('Esto se ejecuta siempre.');
})


// Hacer que la función loadScript
// devuelva una promesa.

function loadScript(src, callback) {
    return new Promise(
        function(resolve, reject) {
            setTimeout(() => {
                let script = document.createElement('script')
                script.src = src
        
                script.onload = () => callback(null, script) //cuando se carga el script, llama al callback
                script.onerror = () => callback(new Error(`Error en la carga ${src}`))
        
                document.head.append(script)
            }, 1000)
        }
    )
    
}

// Encadenamiento de promesas

new Promise(function(resolve, reject){
    setTimeout(() => resolve(1),1000)
}).then(function(result) {
    console.log(result)
    return result * 2
}).then(function(result) {
    console.log(result)
    return result * 2
}).then(function(result) {
    console.log(result)
    return result * 2
})


new Promise(function(resolve, reject){
    setTimeout(() => resolve(1), 1000)
}).then(function(result){
    console.log(result);
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(result * 2), 1000)
    })
}).then(function(result){
    console.log(result)
})

new Promise((resolve, reject) => {
    throw new Error('Ay!')
}).catch(err => console.log(err.message))

new Promise((resolve, reject) => {
    reject(new Error('Ay!'))
}).catch(err => console.log(err.message))

new Promise((resolve, reject) => {
    resolve('Ok!')
}).then(result => {
    console.log(result)
    throw new Error('Ay!')
}).catch(err => console.log(err.message))

new Promise((resolve, reject) => {
    try {
        resolve('Ok!')
    } catch(err) {
        reject('Ay')
    }   
}).then(result => {
    console.log(result)
}).catch(err => console.log(err.message))

//Metodos estáticos

Promise.all(['array de promesas'])

let promise = Promise.all([
    new Promise(resolve => setTimeout(() => {resolve(1)
    console.log('Primera promesa')},3000)),
    new Promise(resolve => setTimeout(() => {resolve(2)
    console.log('Segunda promesa')},2000)),
    new Promise(resolve => setTimeout(() => {resolve(3)
    console.log('Tercera promesa')},1000)),
]).then(value => console.log(value))

// El resultado final se ejecuta cuando todas las promesas
// fueron ejecutadas.

let data = ['primer dato', 'segundo dato', 'tercer dato']

let elements = data.map(value => value + ' procesado.')

Promise.all(elements).then(value => console.log(value))

Promise.allSettled

// Promise.race => carrera de promesas, ejecuta la primera respuesta que recibe.

let promise = Promise.race([
    new Promise(resolve => setTimeout(() => {resolve(1)
    console.log('Primera promesa')},3000)),
    new Promise(resolve => setTimeout(() => {resolve(2)
    console.log('Segunda promesa')},2000)),
    new Promise(resolve => setTimeout(() => {resolve(3)
    console.log('Tercera promesa')},1000)),
]).then(value => console.log(value))



let promise = Promise.any([
    new Promise((resolve, reject) => setTimeout(() => {reject(new Error('Ay!'))
    console.log('Primera promesa')},3000)),
    new Promise(resolve => setTimeout(() => {resolve(2)
    console.log('Segunda promesa')},2000)),
    new Promise(resolve => setTimeout(() => {resolve(3)
    console.log('Tercera promesa')},1000)),
]).then(value => console.log(value)).catch(error => console.log(error))