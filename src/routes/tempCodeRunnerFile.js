import { Router } from "express"
import { permitir } from "../middleware/permission.js"
import CarroController from "../controllers/CarroPage.js"
import { resolve } from "path"
import multer from "multer"

const storage = multer.diskStorage(
  {destination: (req, file, cb) => cb(null, resolve("uploads"))},
  {filename: (req, file, cb) => {
    console.log(file)
    cb(null,`${file.filename}.${file.originalname.split('.').at(-1)}`)}
  }
  )

const upload = multer({ storage }).single('photo')