//Ejercicios de ayer

const myArray = {
    size: 0,
    values: [],

    push: function(element) {
        this.values[this.size] = element;
        this.size++
    },

    pop: function() {
        if(this.size > 0) {
            const aux = []
            for(let i = 0; i < this.size - 1; i++) {
                aux[i] = this.values[i]
            }
            this.values = aux;
            this.size--;
        }
    }
}

//Ejercicio 2
    
    //Programación optimista, siempre tomar el caso como true y después ir buscando los casos false

const person1 = {
    name: 'Homero',
    data: {
        age: 55,
        address: 'Evergreen Avenue 123'
    }
}

const person2 = {
    name: 'Homero',
    data: {
        age: 55,
        address: 'Evergreen Avenue 123'
    }
}

function compareObjects(obj1, obj2) {
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if(keys1.length !== keys2.length) {
        console.log(`Las keys son distintas`);
        return false;
    }

    for(const key of keys1) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        //Llamamos nuevamente a la función para saber de que se trata esa propiedad (objeto o dato primitivo)

        if(value1 != null && value2 != null && typeof value1 == 'object' && typeof value2 == 'object') {
            if(!compareObjects(value1, value2)) { //Si son objetos se llama recursivamente a la función para poder realizar la comparación nuevamente
                return false
            }
        } else {
            if (value1 !== value2) {
                return false
            }
        }
    }

    return true
}

console.log(compareObjects(person1, person2))

//Clases

class User {
    constructor(name) {
        this._name = name
    }

    static staticMethod() {
        console.log('Metodo estático'); //Metodo estático se usan para implementar funciones propias que le pertenecen a la clase, pero a ningún otro objeto en particular.
    }

    sayHi() {
        console.log(`Hola soy ${this.name}`);
    }
    method2() {}

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

}

//El _ indica que el atributo es protegido, por lo tanto se puede cambiar solo mediante un set

const user = new User('Homero')
user.sayHi()

console.log(typeof User);

console.log(User === User.prototype.constructor);

console.log(User.prototype.sayHi);

console.log(Object.getOwnPropertyNames(User.prototype));

class Button {
    constructor(value) {
        this.value = value
    }

    click = () => {
        console.log(this.value);
    }
}

const button = new Button('Aceptar')

setTimeout(button.click, 1000);


class Animal {
    static planet = 'Earth';

    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} corre con una velocidad de ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} se quedó quieto.`);
    }
}

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }
    
    #hide() { //# la función solo se puede usar dentro de la clase
        console.log(`${this.name} se escondió.`);
    }
    stop() {
        super.stop()
        this.#hide()
    }
}

let rabbit = new Rabbit('Bunny', 15)

rabbit.run(5)
rabbit.stop()

class Dog extends Animal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }
    play() {
        console.log(`${this.name} mueve la cola.`);
    }
}

let dog = new Dog('Paco', 'Boder Collie')

dog.play();
dog.run(10)



class Article {
    

    constructor(title, date, publisher) {
        this.title = title;
        this.date = date;
        this.publisher = publisher;
    }

    static compare(article1, article2) {
        return article1.date - article2.date
    }
}

const articles = [
    new Article('COVID', new Date(2020, 4, 10), 'Mi editorial'),
    new Article('Teletrabajo', new Date(2019, 10, 15),'Mi editorial'),
    new Article('Zoom', new Date(2018, 11, 1), 'Otra editorial')
]

articles.sort(Article.compare)

console.log(articles);
console.log(Article.publisher);