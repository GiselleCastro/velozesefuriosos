import Carro from "../model/carro.model.js"
import { resolve } from "path"
import fs from "fs"
import { Op } from "sequelize"

export default class CarroController {
  static async insertCarro (req, res) {
    if (!req.file) req.body.photo = ""
    const { manufacturer, make, model, production_year, status, photo } = req.body
    if (Object.values(req.body).filter( valor => !valor).length) return res.status(400).json( { mensagem: "Há campos vazios." } )
    return Carro.create ({
        manufacturer,
        make,
        model,
        production_year,
        status,
        photo
      })
      .then((novoCarro) => res.status(201).json( novoCarro ))
      .catch((error) => {
      if( fs.existsSync(resolve("uploads", photo)) ) fs.unlinkSync(resolve("uploads", photo))
      return res.status(500).json( error )
    })
  }

  static async getCarroModel (req, res) {
    const { model } = req.params
    try {
      const carroModel = await Carro.findAll( { where: { model:  { [Op.substring] : model } } } )
      if( !carroModel.length ) return res.status(204).json( { mensagem: "Carro de modelo inexistente." } )
      return res.status(200).json( carroModel )
    } catch (error) {
      return res.status(500).json( error )
    }
  }

  static async getCarro (req, res) {
    const { id } = req.params
    const validate = new RegExp(/^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$/)
    if ( !validate.test(id) ) return res.status(400).json( { mensagem: "Formato de ID incorreto." } )
    try {
      const carroID = await Carro.findByPk(id)
      if(!carroID) return res.status(204).json( { mensagem: "Carro de ID inexistente." } )
      return res.status(200).json(carroID)
    } catch (error) {
      return res.status(500).json( error )
    }
  }

  static async getAllCarro (req, res) {
    try {
      const listaCarros = await Carro.findAll()
      if (!listaCarros.length) return res.status(204).json( { mensagem: "Não há carros registrados no sistema." } )
      return res.status(200).json( listaCarros )
    } catch (error) {
      return res.status(500).json( error )
    }
  }

  static async deleteCarro (req, res) {
    const { id } = req.params
    const validate = new RegExp(/^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$/)
    if ( !validate.test(id) ) return res.status(400).json( { mensagem: "Formato de ID incorreto." } )
    if ( ! await Carro.findByPk(id) ) return res.status(204).json( { mensagem: "Carro inexistente no banco de dados!"} )
    try {
      await Carro.destroy( { where: { id } } )
      res.status(200).json ( { mensagem: "Excluído com sucesso!"} )
    } catch (error) {
      res.status(500).json( error )
    }
  }

  static async patchCarro (req, res) {
    const { id } = req.params
    Object.keys(req.body).forEach( key => { if ( !req.body[key] ) delete req.body[key] } )
    if ( !Object.keys(req.body).length ) return res.json( { mensagem: "Nenhuma atualização enviada." } )
    const validate = new RegExp(/^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$/)
    if (!validate.test(id)) return res.status(400).json( { mensagem: "Formato de ID incorreto." } )
    try {
      if(! await Carro.findByPk(id)) return res.status(204).json( { mensagem: "Carro de ID inexistente." } )
      const photoDeletar = await ( await Carro.findByPk(id) ).getDataValue('photo')
      await Carro.update(req.body, { where: { id } } )
      if (req.file) fs.unlinkSync( resolve("uploads", photoDeletar) )
      return res.status(200).json( await Carro.findByPk(id) )
    } catch (error) {
        return res.status(500).json( error )
    }
  }
}
