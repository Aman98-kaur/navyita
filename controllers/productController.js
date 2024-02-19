const express = require("express")
const Products = require("../models/products")


const getAllProducts = async(req, res, next)=>{
    try{
        Products.find({}).then((products)=>{
            res.status(200).send({message:"Products fetched successfully",data: products})
        })
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const getSingleProduct = async(req, res, next)=>{
    const productId = req.params.id
    try{
        Products.find({productId}).then((product)=>{
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

        res.status(201).send({"message":"Product added successfully"})
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const updateProduct =  async(req, res, next)=>{
    try{
        res.status(200).send({"message":"product updated"})
    }
    catch(error){
        res.status(500).json(error.message)
    }
}


const deleteSingleProduct =  async(req, res, next)=>{
    try{
        res.status(200).send({"message":"product deleted"})
    }
    catch(error){
        res.status(500).json(error.message)
    }
}


const deleteAllProducts =  async(req, res, next)=>{
    try{
        res.status(200).send({"message":"all products deleted"})
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