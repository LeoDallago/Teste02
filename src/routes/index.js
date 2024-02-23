const router = require('express').Router()

const { Router } = require('express')
const indexController = require('../controllers/index')
const EquipamentoController = require('../controllers/equipamentos')
const ChamadoController = require('../controllers/chamados')

router.get('/', indexController.index)

router.get('/Cadastro', EquipamentoController.index)
router.post('/Cadastro', EquipamentoController.post)

router.get('/Listar', EquipamentoController.get)

router.get('/Editar', EquipamentoController.pageEdit)
router.post('/Editar/:id', EquipamentoController.edit)

router.get('/Remover/:id', EquipamentoController.remove)


router.get('/Chamado', ChamadoController.index)
router.post('/Chamado', ChamadoController.post)

router.get('/ListarChamado', ChamadoController.get)

router.get('/EditarChamado', ChamadoController.pageEdit)
router.post('/EditarChamado/:id', ChamadoController.Edit)

router.get('/RemoverChamado/:id', ChamadoController.Remove)
module.exports = router