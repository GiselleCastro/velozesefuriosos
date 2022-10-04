import Carro from "../model/carro.model.js"

export default class CarroController {
  static async insertCarro (req, res) {
    const { manufracturer, make, model, production_year, status } = req.body
    const photo = `${req.file.filename}.${req.file.originalname.split('.').at(-1)}`
    try {
      const novoCarro = await Carro.create ({
        manufracturer,
        make,
        model,
        production_year,
        status,
        photo
      })
      res.status(200).json(novoCarro)
    } catch (error) {
      res.status(400).json(error)
    }
  }

  static async getCarro (req, res) {
    const { id } = req.params
    try {
      const carroID = await Carro.findByPk(id)
      if(!carroID) res.status(404).json({oi: "oi"})
      res.status(200).json(carroID)
    } catch (error) {

    }
  }

  static async getAllCarro (req, res) {
    try {
      const listaCarros = await Carro.findAll()
      res.status(200).json(listaCarros)
    } catch (error) {
      res.status(400).json({error})
    }
  }

  static async deleteCarro (req, res) {
    const { id } = req.params
    try {
      await Carro.destroy({ where: { id } })
      res.status(200).json({ mensagem: "Excluído com sucesso!"})
    } catch (error) {
      res.status(400).json( error )
    }
  }

  static async patchCarro (req, res) {
    const { id } = req.params
    try {
      const carroID = await Carro.findByPk(id)
      res.status(200).json(carroID)

      const carroIDpatch = await Carro.update(req.body)
    } catch (error) {

    }
  }

  static async putCarro (req, res) {
    const { id } = req.params
    try {
      const carroID = await Carro.findByPk(id)
      res.status(200).json(carroID)

      const carroIDpatch = await Carro.update(req.body)
    } catch (error) {

    }
  }
}
