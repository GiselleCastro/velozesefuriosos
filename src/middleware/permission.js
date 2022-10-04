export const permitir = (req, res, next) => {
  if (Boolean(req.cookies.permission)) next()
  else res.status(401).json({mensagem: "Não autorizado."})
}
