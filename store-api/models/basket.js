const Sequelize = require('sequelize');
const sequelize = require('../connection');

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

module.exports = Basket;
