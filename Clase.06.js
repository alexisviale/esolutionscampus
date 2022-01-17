// try - catch

try {
    console.log('Inicia el bloque try');
    const x = 2;
    console.log('Termina el bloque try');
} catch (err) {
    console.log('Ocurrió un error en el bloque try: ' + err);
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

console.log('Continúa con la ejecución del script');

//const json = '{"name":"Homero", "age":55}'
//const json = '{malformado}'

try {
    const json = '{"age": 55}'
    proccessData(json)
} catch(err) {
    console.log(err.name);
    console.log(err.message);
} finally {
    console.log('Esto se ejecuta siempre');
}

console.log('Ejecución normal');

function proccessData(json) {
    try {
        const user = JSON.parse(json)
        if(!user.name) {
            throw new SyntaxError('Incomplete data: no name')
        }
        console.log(user.name);
        if(!user.age) {
            throw new SyntaxError('Incomplete data: no age')
        }
        console.log(user.age);
    } catch (err) {
        if(err instanceof ReferenceError){
            console.log(err.name);
        } else if(err instanceof SyntaxError) {
            console.log(err.name);
        } else {
            throw err
        }
    } finally {
        // Hago el reseteo...
    }
}


// Capturar errores y mostrarlos en pantalla
<script>
    window.onerror = function(message, url, line, col, error) {
        alert()
    }
</script>


// Clase Error

class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ValidationError'
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super(property)
        this.name = 'PropertyRequiredError'
    }
}

function test() {
    throw new ValidationError('¡Ay!')
}

try {
    test()
} catch(err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

function readUser(json) {
    try {
        const user = JSON.parse(json)
        if(!user.name) {
            throw new PropertyRequiredError('No field name')
        }
        if(!user.age) {
            throw new PropertyRequiredError('No field age')
        }
        return user
    } catch (err) {
        if(err instanceof SyntaxError) {
            throw new ValidationError('Malformed JSON string: ' + err)
        } else {
            throw err
        }
    }
}

// Crear un FormatError que herede de SyntaxError, admita las propiedades message,
// name y stack

class FormatError extends SyntaxError {
    constructor(message){
        super(message)
        this.name = this.constructor.name
    }
}

const err = new FormatError('Error de formato')

console.log(err.name);
console.log(err.message);
console.log(err.stack);

console.log(err instanceof SyntaxError);

// Desestructuración

let a, b, rest

[a = 0,, b = 0, ...rest] = ['uno', 'dos', 'tres', 'cuatro']

// Las comas agregadas además de la coma por defecto,
// saltea elementos en el array.

function sum(a, b, ...rest) {
    return sum
}

console.log(a);
console.log(b);
console.log(rest);

let a = 1;
let b = 2;
// para hacer un swap, necesitamos agregar ;
[a, b] = [b, a]

const [c, d, ...rest2] = func()

console.log(c);
console.log(d);
console.log(rest2);

function func() {
    return new Set([1,2,3,4,5])
}


const user = {
    name: 'Homero',
    age: 55
}

const {name, age} = user

console.log(name, age);

//Objeto a partir de un array

const arr = ['Homero', 'Simpson', 55]
const user = {...arr}
console.log(user);

const user = {
    name: 'Homero',
    lastName: 'Simpson',
    age: 55
}

const role = {
    isAdmin: false
}

const clone = Object.assign({}, user, role)

console.log(clone);
