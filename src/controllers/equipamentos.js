const equipamentoModel = require('../models/equipamentos')

function index(req, res) {
    res.render('Cadastrar')
}

async function post(req, res) {
    const {
        nome,
        preco,
        serial,
        fabricacao,
        fabricante,
    } = req.body

    const equipamento = new equipamentoModel({
        nome,
        preco,
        serial,
        fabricacao,
        fabricante
    })

    equipamento.save()

    res.render('Cadastrar')
}

async function get(req, res) {
    const equipamento = await equipamentoModel.find()

    res.render('Listar', {
        equipamento,
    })
}

async function pageEdit(req, res) {
    const { id } = req.query

    const equipamento = await equipamentoModel.findById(id)

    res.render('Editar', {
        equipamento,
    })
}

async function edit(req, res) {
    const {
        nome,
        preco,
        serial,
        fabricacao,
        fabricante,
    } = req.body

    const { id } = req.params

    const equipamento = await equipamentoModel.findById(id)

    equipamento.nome = nome
    equipamento.preco = preco
    equipamento.serial = serial
    equipamento.fabricacao = fabricacao
    equipamento.fabricante = fabricante

    equipamento.save()

    res.render('Editar', {
        equipamento,
    })
}

async function remove(req, res) {
    const { id } = req.params

    const equipamento = await equipamentoModel.deleteOne({ _id: id })

    res.redirect('/Listar')
}

module.exports = {
    post,
    index,
    get,
    pageEdit,
    edit,
    remove,
}