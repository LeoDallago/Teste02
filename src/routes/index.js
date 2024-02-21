const router = require('express').Router()

const { Router } = require('express')
const EquipamentoController = require('../controllers/equipamentos')

router.get('/Cadastro', EquipamentoController.index)
router.post('/Cadastro', EquipamentoController.post)

router.get('/Listar', EquipamentoController.get)

router.get('/Editar', EquipamentoController.pageEdit)
router.post('/Editar/:id', EquipamentoController.edit)

router.get('/Remover/:id', EquipamentoController.remove)
module.exports = router