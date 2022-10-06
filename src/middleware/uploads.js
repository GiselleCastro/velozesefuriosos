import { resolve } from "path"
import multer from "multer"

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, resolve("uploads")),
  filename: (req, file, cb) => {
    req.body.photo = `${Date.now()}.${file.originalname.split('.').at(-1)}`
    cb(null, req.body.photo)
  }
})

export const upload = multer({ storage }).single('photo')
