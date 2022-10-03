import { Router } from "express"
import CarroController from "../controllers/CarroPage.js"
import { permitir } from "../middleware/permission.js"
export const routeCarroID = Router()

routeCarroID.route(`/((carros?)|(cars?))/:id`)
    .get(
        permitir,
        CarroController.getCarro,
        (req, res) => {
        res.send("Oie")
    })
    .put(
        permitir,
        (req, res) => {
        res.send("Oi")
    })
    .patch(
        permitir,
        (req, res) => {
        res.send("Oi")
    })
    .delete(
        permitir,
        (req, res) => {
        res.send("Oi")
    })
