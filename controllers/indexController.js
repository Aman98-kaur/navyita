const express = require("express")
const indexRouter = express.Router()



indexRouter.get("/", async(req, res, next)=>{
    try{
        res.status(200).send({"message":"Welcome to DressStore application. Navyita marketplace"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})

module.exports = indexRouter