import { Sequelize } from "sequelize"
import databaseConfigurations from "../config/config.cjs"
import Carro from "../model/carro.model.js"

Carro.init(new Sequelize(databaseConfigurations.development))




