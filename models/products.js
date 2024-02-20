const mongoose = require('mongoose')
// create the products schema

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: { 
        type: String,
        default: false,
        required: true
    },
    price: { 
        type: Number,
        default: false,
        required: true
    },
    quantity: { 
        type: Number,
        default: false,
        required: true
    },
    category: { 
        type: String,
        default: false,
        required: true
    }
})

// create a model from the schema
const Products = mongoose.model("Products", ProductsSchema)


module.exports = Products