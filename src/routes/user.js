const express = require('express');
const Model = require('../models/user');

const router = express.Router();
const data = [{
    name: "user api"
}];

module.exports = router;

//Post Method
router.post('/', async (req, res) => {
    const user = new Model({
        
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        
    })

    try {
        const dataToSave = await user.save();
        res.status(200).json(dataToSave)
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
})
//Get Method
router.get('/', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/', (req, res) => {
    try {
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})