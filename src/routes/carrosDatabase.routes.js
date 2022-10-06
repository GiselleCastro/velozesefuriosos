import { Router } from "express"
import { permitir } from "../middleware/permission.js"
import CarroController from "../controllers/CarroPage.js"
import { upload } from "../middleware/uploads.js"
export const routeCarros = Router()

routeCarros.route(`/((carros?)|(cars?))`)
  .get(
    permitir,
    CarroController.getAllCarro
  )
  .post(
    permitir,
    upload,
    CarroController.insertCarro
  )
