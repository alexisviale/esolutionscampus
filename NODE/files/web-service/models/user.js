const mongoose = require('mongoose')
const { user } = require('../routes')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
},
{timestamp: true} //agrega a la base de datos create at y update at
)

userSchema.statics.findByLogin = async function(login) {
    let user = await this.findOne({
        username: login
    })
    if(!user){
        user = await this.findOne({
            email: login
        })
    }
    return user
}

userSchema.pre('remove', function(next) {
    this.model('Message').deleteMany({user: this._id}, next)
})

const User = mongoose.model('User', userSchema)

module.export = User