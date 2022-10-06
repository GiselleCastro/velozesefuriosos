import fs from "fs"
import path from "path"
function csvToJson (fileCSV, nameJSON, line, row) {
  const dadosCSV = fs.readFileSync(fileCSV, 'utf-8')
  const dadosCSVunit = dadosCSV.split(line).map(item => item.split(row))
  const dadosCSVunitKey = dadosCSVunit[0]
  const dadosCSVunitValue = dadosCSVunit.slice(1)
  const dadosJSONString = []
  dadosCSVunitValue.map((linha) => {
    const objetoAuxiliar = {}
    dadosCSVunitKey.forEach((key, i, arr) => {
      if (arr.length === linha.length) objetoAuxiliar[key.trim()] = linha[i].trim()
      else console.log(`Quantidade de dados diferentes da quantidade de chaves, \r\n linha ${i+1} ==> ${linha}`)
    })
    dadosJSONString.push(objetoAuxiliar)
  })
  fs.writeFileSync(nameJSON, JSON.stringify(dadosJSONString))
}
const fileCSV = path.resolve(".","carros.csv")
const nameJSON = "carros.JSON"
const line = /\r\n/
const row = ","
csvToJson(fileCSV, nameJSON, line, row)
