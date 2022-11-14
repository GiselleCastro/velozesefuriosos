module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("carros", [], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("carros", null, {})
  }
};
