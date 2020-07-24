import express from 'express';
import Product from '../models/productModel';

const router = express.Router();

// @route   GET api/products
// @desc    display products
// @access  Public
router.get('/', async (req, res) => {
  const products = await Product.find({});
    if (products) {
      res.send(products);
    } else {
      res.status(404).send({ msg: 'Products Not Found.' });
    }
});
  
// @route   GET api/products/id
// @desc    display items a customer selects
// @access  Public
router.get(':id', async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found.' });
    }
});