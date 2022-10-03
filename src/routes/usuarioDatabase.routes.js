import { Router } from "express"
import { sair } from "../middleware/signout.js"
import { getLogar, postLogar } from "../middleware/signin.js"

export const routeUsuario = Router()

routeUsuario.route("/")
    .get(
        ...getLogar
    )
    .post(
        ...postLogar
    )

routeUsuario.route("/sair")
    .get(
        sair
    )
