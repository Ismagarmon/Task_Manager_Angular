const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    _id: {
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
    },
    puntuacion: {
        type: Number,
        require: false,
        default: 0
    },
    img: {
        type: String,
        require: false,
        default: ""
    }
})

module.exports = mongoose.model('usuarios', UserSchema)