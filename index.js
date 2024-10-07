const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel.js");
const productRoute = require('./routes/productRoute.js');
const app = express();

//middleware 
app.use(express.json());

//Routes
app.use('/api/products',productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node api server");
});

mongoose
  .connect(
    "mongodb+srv://<your username>:<your password>@backendcruddb.tpphm.mongodb.net/?retryWrites=true&w=majority&appName=backendcrudDB"
  )
  .then(() => {
    console.log("Connected to DB....");
    app.listen(3000, () => {
      console.log("sever is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
