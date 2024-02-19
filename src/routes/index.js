const router = require('express').Router()

const EquipamentoController = require('../controllers/equipamentos')

router.get('/Cadastro', EquipamentoController.index)
router.post('/Cadastro/add', EquipamentoController.post)

router.get('/Listar', EquipamentoController.get)

router.get('/Editar', EquipamentoController.pageEdit)
router.post('/Editar/:id', EquipamentoController.edit)
module.exports = router