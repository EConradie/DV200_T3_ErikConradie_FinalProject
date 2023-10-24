const mongoose = require('mongoose')

const addProduct = mongoose.Schema({
    
    name: { type: String, required: true },

    price: { type: Number, required: true },

    stock: { type: Number, required: true },

    category: { type: String, required: true },

    rating: { type: Number, required: true },
    
    description: { type: String, required: true },

})

module.exports = mongoose.model("products", addProduct)