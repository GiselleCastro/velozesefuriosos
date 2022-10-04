import { Router } from "express"
import { permitir } from "../middleware/permission.js"
import CarroController from "../controllers/CarroPage.js"
import { resolve } from "path"
import multer from "multer"

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, resolve("uploads")),
  filename: (req, file, cb) => cb(null,`${Date.now()}.${file.originalname.split('.').at(-1)}`)
})

const upload = multer({ storage }).single('photo')

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
