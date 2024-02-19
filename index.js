const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose")
require("dotenv").config()

const indexRouter = require("./controllers/indexController")
const productRouter = require("./routes/productRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/api/products", productRouter);

const port = process.env.PORT||3000
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(port,()=>{
        console.log(`server running on port ${port}`)
    })
})
