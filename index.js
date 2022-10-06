import express from "express"
import { routeList } from "./src/routes/routes.js"
import "./src/database/connection.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(
    express.urlencoded({ extended: true}),
    express.json({ extended: true}),
    cookieParser(),
    ...routeList
)

app.listen(process.env.PORT, () => {
    console.log(`\n Acessar http://localhost:${process.env.PORT}/ \n
    Servidor executando na porta ${process.env.PORT}.`)
})
