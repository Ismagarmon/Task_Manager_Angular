const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    apellidos: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('usuarios', UserSchema)