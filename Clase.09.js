exports.log = {
    console: function(msg){
        console.log(msg);
    },
    file: function(msg){
        // aquí hariamos el log en un archivo.
    }
}

// Core Modules, Local Modules, Third Party Modules

var http = require('http');
const { emitWarning } = require('process');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' :  'text/plain'})
    res.write('SERVIDOR ACTIVO')
    res.end()
})

server.listen(5000) // Descargar Postman.

//

var person =  require('./log.js')

console.log(person.firstName + ' ' + person.lastName);

//

var Person = require('./log.js')
var Person = new Person('Homero', 'Simpson')
console.log(Person.fullName());

