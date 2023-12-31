// ------------------------------

const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// ------------------------------

const app = express()
const userRoutes = require('./routes/user.cjs')

// ------------------------------

const PORT = process.env.PORT ?? '9000'

// ------------------------------



//Middleware
app.use(express.json())
app.use('/api', userRoutes ) //Para ir a las rutas de nuestra API, siempre tenemos que poner "/api" en el navegador


//Routes
app.get('/', (req, res) => {
    res.send('Welcome to my api with node and express')
})

// console.log(typeof process.env.MONGO_URI)

//Connection with MongoDB Atlas
mongoose
.connect(process.env.MONGO_URI)
.then(() => {console.log('Connected')})
.catch( error => console.log(error))

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`)
})