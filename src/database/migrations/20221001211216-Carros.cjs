module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("carros", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        unique: true,
      },
      manufracturer: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      make: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      production_year:{
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          min: 1800,
          msg: 'Ano não válido'
        }
      },
      status: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      photo: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("carros")
  }
}
