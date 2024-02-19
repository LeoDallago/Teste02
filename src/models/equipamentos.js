const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nome: String,
    preco: String,
    serial: String,
    fabricacao: String,
    fabricante: String,
})

const Model = mongoose.model('equipamentos', schema)

module.exports = Model