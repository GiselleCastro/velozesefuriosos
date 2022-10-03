export const permitir = (req, res, next) => {
  console.log(req)
  if (Boolean(req.cookies.permission)) next()
  else res.status(401).send("Não autorizado.")
}
