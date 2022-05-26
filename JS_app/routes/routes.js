const express = require('express');
const Model = require('../models/model')

const router = express.Router()

// post
router.post('/post', async (req, res) => {
    const data = new Model ({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

// get all
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

// get by ID
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

// update by ID method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

// delete by ID method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;