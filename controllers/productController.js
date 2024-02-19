const express = require("express")
const productRouter = express.Router()



productRouter.get("/", async(req, res, next)=>{
    try{
        res.status(200).send({"message":"products fetched"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})

productRouter.get("/:id", async(req, res, next)=>{
    try{
        res.status(200).send({"message":"product fetched by id"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})

productRouter.post("/", async(req, res, next)=>{
    try{
        res.status(200).send({"message":"product added"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})

productRouter.put("/:id", async(req, res, next)=>{
    try{
        res.status(200).send({"message":"product updated"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})

productRouter.delete("/:id", async(req, res, next)=>{
    try{
        res.status(200).send({"message":"product deleted"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})

productRouter.delete("/", async(req, res, next)=>{
    try{
        res.status(200).send({"message":"all products deleted"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})

productRouter.get("/published", async(req, res, next)=>{
    try{
        res.status(200).send({"message":"fetched all published products"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})

productRouter.get("/", async(req, res, next)=>{
    try{
        res.status(200).send({"message":"products fetched"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})



module.exports = productRouter