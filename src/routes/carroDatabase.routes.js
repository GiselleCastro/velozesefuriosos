import { Router } from "express"
import CarroController from "../controllers/CarroPage.js"
import { permitir } from "../middleware/permission.js"
import { upload } from "../middleware/uploads.js"

export const routeCarroID = Router()

routeCarroID.route(`/((carros?)|(cars?))/id/:id`)
  .get(
    permitir,
    CarroController.getCarro
  )
  .patch(
    permitir,
    upload,
    CarroController.patchCarro
  )
  .delete(
    permitir,
    CarroController.deleteCarro
  )

routeCarroID.route(`/((carros?)|(cars?))/modelo?/:model`)
  .get(
    permitir,
    CarroController.getCarroModel
  )
