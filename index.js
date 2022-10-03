import express from "express"
import path from "path"
import { routeList } from "./src/routes/routes.js"
import "./src/database/connection.js"
import cookieParser from "cookie-parser"

// try{
//     await carrosDB.authenticate()
//     console.log("Conexão realizada com sucesso!")
//         try {
//             console.log(await carrosDB.sync())
//         } catch (error) {
//             console.error(error)
//         }
// } catch (error) {
//     console.error("Falha na conexão.")
// }

const app = express()

app.use(
    express.urlencoded({ extended: true}),
    express.json({ extended: true}),
    express.static(path.resolve(".", "public")),
    cookieParser(),
    ...routeList
)

app.set("view engine", "ejs")

app.listen(process.env.PORT, () => {
    console.log(`\n Acessar http://localhost:${process.env.PORT}/ \n
    Servidor executando na porta ${process.env.PORT}.`)
})
