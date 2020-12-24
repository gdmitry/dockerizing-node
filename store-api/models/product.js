const Sequelize = require('sequelize');
const sequelize = require('../connection');

const Product = sequelize.define(
  'Product',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.BLOB,
      allowNull: true,
      get() {
        const rawValue = this.getDataValue('image');
        return rawValue ? rawValue.toString('base64') : null;
      }
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: true,
    },
  },
  {
    instanceMethods: {
      myTestFunc() {
        return 'Test User';
      },
    },
  },
);

module.exports = Product;
