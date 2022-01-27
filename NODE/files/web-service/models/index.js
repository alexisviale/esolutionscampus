const mongoose = require('mongoose')

const users = require('./user')
const messages = require('./message')

const connectDb = () => {
    return mongoose.connect('mongodb://localhost:27017/node-express-mongodb')
}

const models = {
    users,
    messages
}

module.exports.connectDb = connectDb
module.exports.models = models