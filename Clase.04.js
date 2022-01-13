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

Object.defineProperty(0, 'reset', {
    get: function() {
        this.counter = 0
    }
})

Object.defineProperty(0, 'reset', {
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
