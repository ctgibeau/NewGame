const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    img: {
        required: true,
        type: String
    },
    rarity: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    description: {
        required: true,
        type: String
    },
    stock: {
        required: true,
        type: Number
    },
    boxset: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)