const chamadoModel = require('../models/chamados')

function index(req, res) {
    res.render('Chamado')
}

function post(req, res) {
    const {
        titulo,
        descricao,
        equipamento,
        data_abertura,
    } = req.body

    const chamado = new chamadoModel({
        titulo,
        descricao,
        equipamento,
        data_abertura,
    })

    chamado.save()


    res.render('Chamado', {
        message: 'Cadastro realizado com sucesso!',
    })
}

async function get(req, res) {
    const chamado = await chamadoModel.find()

    res.render('ListarChamado', {
        chamado,
    })
}

async function pageEdit(req, res) {
    const { id } = req.query

    const chamado = await chamadoModel.findById(id)

    res.render('EditarChamado', {
        chamado,
    })
}

async function Edit(req, res) {
    const {
        titulo,
        descricao,
        equipamento,
        data_abertura,
    } = req.body

    const { id } = req.params

    const chamado = await chamadoModel.findById(id)

    chamado.titulo = titulo
    chamado.descricao = descricao
    chamado.equipamento = equipamento
    chamado.data_abertura = data_abertura

    chamado.save()

    res.redirect('/ListarChamado')
}

async function Remove(req, res) {
    const { id } = req.params

    const chamado = await chamadoModel.deleteOne({ _id: id })

    res.redirect('/ListarChamado')
}

module.exports = {
    index,
    post,
    get,
    pageEdit,
    Edit,
    Remove,
}