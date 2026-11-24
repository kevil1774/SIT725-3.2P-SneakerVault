
const mongoose = require('mongoose');

const sneakerSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    color: {
        type: String,
        required: true
    },

    size: {
        type: Number,
        required: true
    },

    stock: {
        type: Number,
        default: 0
    },

    supplier: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('Sneaker', sneakerSchema);
