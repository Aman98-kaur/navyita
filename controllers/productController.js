const express = require("express")


const getAllProducts = async(req, res, next)=>{
    try{
        res.status(200).send({"message":"products fetched"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const getSingleProduct = async(req, res, next)=>{
    try{
        res.status(200).send({"message":"product fetched by id"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}


const addProduct = async(req, res, next)=>{
    try{
        res.status(200).send({"message":"product added"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const updateProduct =  async(req, res, next)=>{
    try{
        res.status(200).send({"message":"product updated"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}


const deleteSingleProduct =  async(req, res, next)=>{
    try{
        res.status(200).send({"message":"product deleted"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}


const deleteAllProducts =  async(req, res, next)=>{
    try{
        res.status(200).send({"message":"all products deleted"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}


const getPublishedProducts =  async(req, res, next)=>{
    try{
        res.status(200).send({"message":"fetched all published products"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}



module.exports = {getAllProducts, getSingleProduct, addProduct, updateProduct, deleteSingleProduct, deleteAllProducts, getPublishedProducts}