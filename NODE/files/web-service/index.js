/* const env = require('node-env-file')
env(__dirname, '/.env') */


const express = require('express')
const cors = require('cors')
const models = require('./models').models
const connectDb = require('./models').connectDb
const routes = require('./routes')
const router = require('./routes/session')

const app = express()

//Sirve para cross origins
app.use(cors())
app.use(express.json()) //para que transforme todo a json
app.use(express.urlencoded({extended: true}))
app.use(async (req, res, next) => { //midleware, intercepta una llamada y hace algo
    req.context = {
        models,
        me: await models.users.findByLogin('hsimpson'),
    }
    next()
})

//Acá se definen las rutas
app.use('/session', routes.session)
app.use('/users', routes.user)
app.use('/messages', routes.message)

const eraseDatabase = true

connectDb().then(async () => {
        //Acá se levanta el servidor
        if(eraseDatabase) {
            await Promise.all([
                models.users.deleteMany({}),
                models.messages.deleteMany({})
            ])
            createData()
        }
        app.listen(5000, () => {
            console.log(`Servidor express ejecutándose en el puerto 5000`)
        })
    })

const createData =  async () => {
    const user1 = new models.users({
        username: 'hsimpson'
    })
    const user2 = new models.users({
        username: 'nflanders'
    })

    const message1 = new models.messages({
        text: 'Mmmmmm.... lo que sea',
        user: user1.id
    })

    const message2 = new models.messages({
        text: 'Perfectirihillo',
        user: user2.id
    })
    const message3 = new models.messages({
        text: 'Hola Todd, hola Rod',
        user: user2.id
    })

    await user1.save()
    await user2.save()
    await message1.save()
    await message2.save()
    await message3.save()

}



//'{protocolo}://{dominio o hostname}[:puerto]/{ruta_recurso}?{consulta_de_filtrado}'
//ejemplo || 'https://dominio:1000/facturas?fecha_desde=""&fecha_hasta=""'

// Cliente -> API REST -> SERVIDOR -> BD

