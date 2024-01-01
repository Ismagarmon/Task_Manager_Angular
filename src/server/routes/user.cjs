const express = require('express')

const router = express.Router()

const US = require('../entity/user.cjs')

//Crear usuario

router.post('/users', async (req, res) => {
    try {
        const user = new US(req.body)
        const createuser = await user.save()

        res.send('Se ha creado correctamente el usuario.')
    } catch (error) {
        res.status(500).send('No se ha podido crear el usuario.')
        res.end()
    }

})


// All users

router.get('/users', async (req, res) => {
    try {
        const ArrayUsers = await US.find()
        res.json(ArrayUsers)
    } catch (error) {
        res.status(500).send('No se han encontrado los usuarios.')
        res.end()
    }

})

// Get one user

router.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await US.findById(id)
        res.json(user)
    } catch (error) {
        res.status(500).send('No se han encontrado los usuarios.')
        res.end()
    }

})


// Actualizar usuario

router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, apellidos, email, password } = req.body
        const user = await US.updateOne({_id: id}, {$set: { nombre, apellidos, email, password } })
        res.json(user)
    } catch (error) {
        res.status(500).send('No se han encontrado los usuarios.')
        res.end()
    }

})


// Actualizar imagen
router.put('/users/img/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { img } = req.body
        const user = await US.updateOne({_id: id}, {$set: { img } })
        res.json(user)
    } catch (error) {
        res.status(500).send('No se han encontrado los usuarios.')
        res.end()
    }

})

// Actualizar puntuacion
router.put('/users/points/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { puntuacion } = req.body
        const user = await US.updateOne({_id: id}, {$set: { puntuacion } })
        res.json(user)
    } catch (error) {
        res.status(500).send('No se han encontrado los usuarios.')
        res.end()
    }

})

// Eliminar usuario
router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await US.deleteOne({_id: id})
        res.json(user)
    } catch (error) {
        res.status(500).send('No se han encontrado los usuarios.')
        res.end()
    }

})

module.exports = router