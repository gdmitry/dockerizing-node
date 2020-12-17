var express = require("express");
var router = express.Router();
var Product = require("../models/product");

router.get("/all", function (req, res) {
  Product.findAll()
    .then((products) => {
      res.status(200).send(JSON.stringify(products));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

module.exports = router;
