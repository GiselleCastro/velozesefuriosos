import { Router } from "express"
import { permitir } from "../middleware/permission.js"
import CarroController from "../controllers/CarroPage.js"
import multer from "multer"
import { resolve } from "path"

const upload = multer({dest: "../uploads"})

export const routeCarros = Router()

routeCarros.route(`/((carros?)|(cars?))`)
  .get(
    permitir,
    CarroController.getAllCarro
  )
  .post(
    upload.single("avatar"),
    permitir,
    //CarroController.insertCarro
  )
