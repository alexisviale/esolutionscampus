const person = {
    firstName: 'Homero',
    lastName: 'Simpson',
    age: '55',
    pets: [
        {name: 'Santas little helper', toys: ['pelota', 'hueso']},
        {name: 'Snowball', toys: ['lana', 'raton']}
    ],

    fullName: function() {
        return this.firstName + ' ' + this.lastName
    },

    get getFirstName() {
        return this.firstName.toUpperCase()
    },

    /**
     * @param {string} age
     */
    set setAge(age) {
        this.age = age
    }
}

for(let i in person.pets) {
    let n= person.pets[i].name + ' juega con '
    for(let j in person.pets[i].toys) {
        n+= person.pets[i].toys[j] + ' '
    }
    console.log(n);
}

console.log(person.fullName());
console.log(person.getFirstName);

person.setAge = 50

console.log(person.age)

const o = {
    counter: 0
}

Object.defineProperty(o, 'reset', {
    get: function() {
        this.counter = 0
    }
})

Object.defineProperty(o, 'reset', {
    get: function() {
        this.counter++
    }
})

o.increment 

console.log(o);

o.reset

console.log(o);

//Clases constructoras

function Person(firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.city = 'Springfield'
}

const homero = new Person('Homero', 'Simpson', 55)
const bart = new Person('Bart', 'Simpson', 12)

Person.prototype.otherProperty = 'Algo'
Person.prototype.otherMethod = function() {
    return 'Hola soy otherMethod'
}


console.log(bart.otherProperty);
console.log(homero.otherMethod());

//Iteradores

for(let x of [1,2,3,4,5]) {
    console.log(x);
}

function listOfNumbers() {
    let n = 0
    return {
        next: function() {
            n+= 10;
            return {value: n, done : false}
        }
    }
}


let set = new Set(['a', 'b', 'c'])

set.forEach((value) => {
    console.log(`El valor del elemento es ${value}`);
})

const it = set.values()

let map = new Map([
    ['Homero', 55],
    ['Bart', 10],
    ['Lisa', 8]
])

map.forEach(function(value, key) {
    console.log(`La claver es ${key} y el valor es ${value}`);
})

//Ejercicios

//Ejercicio 1

const myArray = {
   pet1: 'perro',
   pet2: 'gato',
   
   agregar: function(prop, elem) {
       
        this[prop] = elem
       
   },
   eliminar: function() {
       let lastKey = Object.keys(myArray)
       let delKey = lastKey.length
       delete this[lastKey[delKey - 1]]
   }
}

myArray.agregar('sun','antonio')
myArray.agregar('wife','julieta')
myArray.agregar('husband','alexis')

myArray.eliminar()
console.log(myArray);

//Ejercicio 2

const obj1 =  {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: {
        sub1: 'sub1',
        sub2: 'sub2',
    }
}

const obj2 =  {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: {
        sub1: 'sub1',
        sub2: 'sub2',
    }
}

console.log(Object.keys(obj1));

const objectsComparator = (obj1, obj2) => {

    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)

    if(keys1.length !== keys2.length) {
        return false
    }
    
    for (const key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];
        
        if(
            !objectsComparator(val1, val2) || val1 !== val2
        ) {
            return false;
        }
    }

    return true

}

console.log(objectsComparator(obj1, obj2))