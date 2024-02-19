const mongoose = require('mongoose')
// create the products schema

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: { 
        type: String,
        default: false
    },
    price: { 
        type: Number,
        default: false
    },
    quantity: { 
        type: Number,
        default: false
    },
    category: { 
        type: String,
        default: false
    }
})

// create a model from the schema
const Products = mongoose.model("Products", ProductsSchema)


module.exports = Products