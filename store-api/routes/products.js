const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/all', (req, res) => {
  Product.findAll()
    .then((products) => {
      res.status(200).send(JSON.stringify(products));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

module.exports = router;
