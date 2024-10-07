const express = require('express');
const Product = require("../models/productModel.js");
const {getProducts,getProductById,createProduct,updateProduct,deleteProduct} = require('../controller/productController.js')
const router = express.Router();


router.get('/',getProducts);

router.get('/:id',getProductById);

router.post('/',createProduct);

router.put('/:id',updateProduct)

router.delete('/:id',deleteProduct);
  

module.exports = router;