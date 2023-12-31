const express = require('express')

const router = express.Router()

const US = require('../entity/user.cjs')

//Crear usuario

router.post('/users', (req, res) => {
    try {
        const user = US(req.body)
        user
        .save()
        .then((data) => res.json(data))
        .catch(error => res.json({message: error}))
    
        res.send('Usuario creado')
        res.end()
    } catch (error) {
        res.send(error)
    }
    
})


module.exports = router