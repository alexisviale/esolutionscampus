const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        unique: true,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
},
{timestamp: true} //agrega a la base de datos create at y update at
)

const Message = mongoose.model('Message', messageSchema)

module.exports = Message