import { resolve } from "path"
const templateSignIn = resolve("..", "public", "views", "usuario", "signin.ejs")

export const getLogar = [
    (req, res) => {
        res.status(200).send("cheguei")
    }
]

export const postLogar = [
    (req, res, next) => {
        const {usuario, senha} = req.body
        if (usuario === process.env.USER && senha === process.env.PASSWORD) next()
        else res.status(200).send("Usuário e/ou senha incorreto(s).")
    },
    (req, res) => {
        res.cookie("permission", true)
        res.status(200).redirect("/carros")
    }
]
