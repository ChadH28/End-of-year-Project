const express = require('express');
const Product = require('../models/productModel');

const router = express.Router();

// @route   GET api/products
// @desc    get and display products
// @access  Public
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
      res.send(products)
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send('Products Not Found.');
  }
});

// @route   GET api/products/id
// @desc    display items a customer selects
// @access  Public
router.get(':id', async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
      res.send(product);
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send('Product Not Found.');
  }
});

module.exports = router;