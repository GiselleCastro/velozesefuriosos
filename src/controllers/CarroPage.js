import Carro from "../model/carro.model.js"
import { resolve } from "path"
import fs from "fs"

export default class CarroController {
  static async insertCarro (req, res) {
    if (!req.file) req.body.photo = ""
    const { manufracturer, make, model, production_year, status, photo } = req.body
    if (Object.values(req.body).filter( valor => !valor).length) return res.json({mensagem: "Há campos vazios."})
    return Carro.create ({
        manufracturer,
        make,
        model,
        production_year,
        status,
        photo
      })
      .then((novoCarro) => res.status(200).json(novoCarro))
      .catch((error) => {
      if(fs.existsSync(resolve("uploads", photo))) fs.unlinkSync(resolve("uploads", photo))
      return res.status(400).json(error)
    })
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
