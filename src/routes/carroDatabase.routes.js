import { Router } from "express"
import CarroController from "../controllers/CarroPage.js"
import { permitir } from "../middleware/permission.js"

export const routeCarroID = Router()

routeCarroID.route(`/((carros?)|(cars?))/:id`)
  .get(
    permitir,
    CarroController.getCarro
  )
  .put(
    permitir,
    CarroController.putCarro
  )
  .patch(
    permitir,
    CarroController.patchCarro
  )
  .delete(
    permitir,
    CarroController.deleteCarro
  )
