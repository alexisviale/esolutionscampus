/* const env = require('node-env-file')
env(__dirname, '/.env') */


const express = require('express')
const cors = require('cors')
const models = require('./models')
const routes = require('./routes')

const app = express()

//Sirve para cross origins
app.use(cors())
app.use(express.json()) //para que transforme todo a json
app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => { //midleware, intercepta una llamada y hace algo
    req.context = {
        models,
        me: models.users[1],
    }
    next()
})

//Acá se definen las rutas
app.use('/session', routes.session)
app.use('/users', routes.user)
app.use('/messages', routes.message)


//Acá se levanta el servidor
app.listen(5000, () => {
    console.log(`Servidor express ejecutándose en el puerto 5000`)
})

//'{protocolo}://{dominio o hostname}[:puerto]/{ruta_recurso}?{consulta_de_filtrado}'
//ejemplo || 'https://dominio:1000/facturas?fecha_desde=""&fecha_hasta=""'

// Cliente -> API REST -> SERVIDOR -> BD