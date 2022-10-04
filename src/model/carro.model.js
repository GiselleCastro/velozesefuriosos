import { Sequelize, Model } from "sequelize";

export default class Carro extends Model {
  static init(sequelize){
    super.init({
      manufracturer: Sequelize.STRING(50),
      make: Sequelize.STRING(50),
      model: Sequelize.STRING(50),
      production_year: Sequelize.INTEGER,
      status: Sequelize.STRING(50),
      photo: Sequelize.STRING(100),
    }, {
      sequelize
    })
    return this
  }
}
