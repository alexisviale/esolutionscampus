function add(a, b) {
    let sum = a + b;
    console.log(`${a} + ${b} = ${sum}`);
}

function mult(a, b) {
    let product = a * b;
    console.log(`${a} * ${b} = ${sum}`);
}

let sum = add

//Copia de la función
sum(100, 20)

//Llamado a la función
add(30, 40)

const arr = [add, mult]

arr[0](2, 5)

let number = Number.parseInt(`8`)

console.log(number)

function showAccept() {
    console.log('Accepted');
}

function showCancel() {
    console.log('Canceled');
}

function process(question, yes, no) {
    confirm(question) ? yes() : no();
}

process('Are you sure?', showAccept, showAccept)


//Funciones anidadas

function firstLevel() {
    console.log('Primer nivel...');
    const arr = []
    function secondLevel() {
        console.log('Segundo nivel...');
        arr.push('dos')
        thirdLevel()
        console.log('En el segundo nivel -> ' + arr);
        arr.pop()
        function thirdLevel() {
            console.log('Tercer nivel...');
            arr.push('tres')
            console.log('En el tercer nivel -> ' + arr);
        }
    }
    secondLevel()
    console.log('En el primer nivel -> ' + arr);
}

firstLevel()

//Arguments

function selectFirst() {
    console.log('El primer elemento es: ' + arguments[0]);
}

selectFirst('A', 'B', 'C')

//Ejercicio

function argumType(param1) {
    return (typeof param1)
}

function primitive() {
    let result = argumType(10)
    console.log(result);
}

primitive()