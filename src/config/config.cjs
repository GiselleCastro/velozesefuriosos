require("dotenv").config()

module.exports = {
  development: {
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB,
    host: process.env.IP_DB,
    port: process.env.PORT_DB,
    dialect: process.env.DIALECT_DB,
    dialectOptions: {
      timezone: "America/Sao_Paulo",
    },
    define: {
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    timezone: "America/Sao_Paulo",
  }
}
