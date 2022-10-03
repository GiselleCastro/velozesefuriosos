import { Sequelize, Model } from "sequelize";

export default class Carro extends Model {
  static init(sequelize){
    super.init({
      manufracturer: Sequelize.STRING(30),
      make: Sequelize.STRING(30),
      model: Sequelize.STRING(30),
      production_year: Sequelize.INTEGER,
      status: Sequelize.STRING(20),
      photo: Sequelize.STRING(100),
    }, {
      sequelize
    })

    this.addHook('beforeSave', carro => {
      console.log('o', carro)
    })

    return this
  }
}
