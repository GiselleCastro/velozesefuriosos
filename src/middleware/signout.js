export const sair = (req, res) => {
    res.cookie("permission", false)
    res.status(200).redirect("/")
}
