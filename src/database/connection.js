import { Sequelize } from "sequelize"
import databaseConfigurations from "../config/config.cjs"
import Carro from "../model/carro.model.js"

const carrosDB = new Sequelize(databaseConfigurations.development)
const structures = [ Carro ]

structures.forEach(structure => structure.init(carrosDB))

//await carrosDB.close()



