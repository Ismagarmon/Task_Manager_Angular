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


module.exports = router