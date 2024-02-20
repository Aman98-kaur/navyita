const express = require("express")
const Products = require("../models/products")


const getAllProducts = async (req, res, next) => {
    try {
        if (req.query.name) {
            const products = await Products.find({ name: { $regex: req.query.name, $options: 'i' } });
            return res.status(200).json(products);
        }

        const products = await Products.find({});
        return res.status(200).send({ message: "Products fetched successfully", data: products });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


const getSingleProduct = async(req, res, next)=>{
    const productId = req.params.id
    try{
        Products.findById(productId).then((product)=>{
            res.status(200).send({message:`Product ${productId} fetched successfully`,data: product})
        })
    }
    catch(error){
        res.status(500).json(error.message)
    }
}


const addProduct = async(req, res, next)=>{
    try{
        const {name, description, price, quantity, category} = req.body

        const newProduct = new Products({name, description, price, quantity, category})
        const saveProduct =  await newProduct.save()

        res.status(201).send({"message": `Product ${name} added successfully`})
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const updateProduct =  async(req, res, next)=>{
    const productId = req.params.id
    const {name, description, price, quantity, category} = req.body

    try{
        const updatedProduct = await Products.findByIdAndUpdate(productId,{name, description, price, quantity, category}, {new: true})

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).send({"message":"Product updated successfully", data:updatedProduct})
    }
    catch(error){
        res.status(500).json(error.message)
    }
}


const deleteSingleProduct =  async(req, res, next)=>{
    try{
        await Products.findByIdAndDelete(req.params.id)

        res.status(200).send({"message":`Product ${req.params.id} deleted successfully`})
    }
    catch(error){
        res.status(500).json(error.message)
    }
}


const deleteAllProducts =  async(req, res, next)=>{
    try{
        await Products.deleteMany()
        res.status(200).send({"message":"All products deleted successfully"})
    }
    catch(error){
        res.status(500).json(error.message)
    }
}


const getPublishedProducts =  async(req, res, next)=>{
    try{
        res.status(200).send({"message":"fetched all published products"})
    }
    catch(error){
        res.status(500).json(error.message)
    }
}



module.exports = {getAllProducts, getSingleProduct, addProduct, updateProduct, deleteSingleProduct, deleteAllProducts, getPublishedProducts}