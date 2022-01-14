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