

// Se pueden definir variables de esta forma, pero no es recomendable debido a la poca legibilidad. -

const PI = 3.14, name = "Homero", lastName = "Simpson"

console.log(name + " " + lastName)

let sayHello = function() {
    console.log('Hola');
}

sayHello();

function ages() {
    console.log(average(45, 63, 92, 41));

}

function average(age1, age2, age3, age4) {
    return (age1 + age2 + age3 + age4)/4;
}

ages();