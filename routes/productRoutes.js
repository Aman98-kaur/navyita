const express = require("express")
const productRouter = express.Router()
const {getAllProducts, getSingleProduct, addProduct, updateProduct, deleteSingleProduct, deleteAllProducts, getPublishedProducts} = require("../controllers/productController")

productRouter.get("/", getAllProducts)
productRouter.get("/:id", getSingleProduct)
productRouter.post("/", addProduct)
productRouter.put("/:id", updateProduct)
productRouter.delete("/:id", deleteSingleProduct)
productRouter.delete("/", deleteAllProducts)
productRouter.get("/published", getPublishedProducts)

module.exports = productRouter