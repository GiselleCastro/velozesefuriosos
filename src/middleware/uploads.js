import { resolve } from "path"
import multer from "multer"

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, resolve("uploads")),
  filename: (req, file, cb) => cb(null, `${Date.now()}.${file.originalname.split('.').at(-1)}`)
})

export const upload = multer({ storage }).single('photo')
