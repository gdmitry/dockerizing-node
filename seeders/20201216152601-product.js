"use strict";

const fs = require('fs');
const mockedImage = fs.readFileSync('./assets/image.jpg');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          title: "smth",
          price: 3434.353,
          image: mockedImage,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
