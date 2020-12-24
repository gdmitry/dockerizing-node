const Sequelize = require('sequelize');
const sequelize = require('../connection');
const Product = require('./product');

const Basket = sequelize.define('Basket', {
  totalCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  totalPrice: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
});

Basket.hasMany(Product);

module.exports = Basket;
