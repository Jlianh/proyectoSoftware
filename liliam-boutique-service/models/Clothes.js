const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')

const ReviewSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    date: {
        type: Date,
        default: Date.now
    }
});

let ClothesSchema = new mongoose.Schema({
    identification: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
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
        type: String,
        required: true
    },
    reviews: [ReviewSchema] 
})

module.exports = mongoose.model('clothes', ClothesSchema)