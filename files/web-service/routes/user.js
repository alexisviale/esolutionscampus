const router = require('express').Router()

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.users))
})

router.get('/:userId', (req, res) => {
    return res.send(req.context.models.users[req.params.userId])
})

router.post('/', (req, res) => {
    return res.send('Método POST HTTP recibido.')
})

router.put('/:usedId', (req, res) => {
    return res.send('Método PUT HTTP recibido.')
})

router.delete('/:userId', (req, res) => {
    return res.send('Método DELETE HTTP recibido.')
})

module.exports = router