const http = require('http')

const host = 'localhost'
const port = 5000

const books = JSON.stringify([
    {title:'Un libro', author: 'Un autor', year: '1955'},
    {title:'Otro libro', author: 'Otro autor', year: '2010'}
])

const authors = JSON.stringify([
    {name:'Pepe', yearOfBirth: '1930'},
    {name:'Pipo', yearOfBirth: '1980'}
    
])

const requestListener = (req, res) => {
    res.setHeader('Content-Type','application/json')
    switch(req.url) {
        case '/books':
            res.writeHead(200)
            res.end(books)
            break
        case '/authors':
            res.writeHead(200)
            res.end(authors)
            break
        default:
            res.writeHead(404)
            res.end(JSON.stringify({error: 'Recurso no encontrado'}))
    }
} 

const server = http.createServer(requestListener)

server.listen(port, host, () => {
    console.log(`El servidor está respondiendo en http://${host}:${port}`);
})