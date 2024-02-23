const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    equipamento: String,
    data_abertura: String,
})

const Model = mongoose.model('chamados', schema)

module.exports = Model