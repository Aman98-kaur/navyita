const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const indexRouter = require("./controllers/indexController")
const productRouter = require("./routes/productRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/api/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
