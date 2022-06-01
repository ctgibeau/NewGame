const express = require('express');
const Model = require('../models/item');

const router = express.Router();
const data = [{
    name: "default"
}];

module.exports = router;

//Post Method
router.post('/item', async (req, res) => {
    const data = new Model({
        
        title: req.body.title,
        img: req.body.img,
        rarity: req.body.rarity,
        price: req.body.price,
        description: req.body.description,
        quantity: req.body.quantity,
        boxset: req.body.boxset
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
})
//Get Method
router.get('/item', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/get/item/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/item/:id', async (req, res) => {
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
router.delete('/item/:id', async (req, res) => {
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