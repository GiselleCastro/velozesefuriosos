export const getLogar = [
  (req, res) => {
    res.status(200).json({mensagem: "Velozes e Furiosos"})
  }
]

export const postLogar = [
  (req, res, next) => {
    const {usuario, senha} = req.body
    if (usuario === process.env.USER && senha === process.env.PASSWORD) next()
    else res.status(400).json({mensagem: "Usuário e/ou senha incorreto(s)."})
  },
  (req, res) => {
    res.cookie("permission", true)
    res.status(200).json({mensagem: "Acesso autorizado."})
  }
]
