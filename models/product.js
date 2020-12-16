const Sequelize = require("sequelize");
const sequelize = require("../connection");

const Product = sequelize.define(
  "Product",
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.BLOB,
      allowNull: true,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: true,
    },
  },
  {
    instanceMethods: {
      myTestFunc: function () {
        return "Test User";
      },
    },
  }
);

module.exports = Product;
