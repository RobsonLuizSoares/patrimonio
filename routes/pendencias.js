const express = require('express')
const pendenciasController = require('../controllers/pendencias')

const pendenciasRouter = ({ connection }) => {
  const router = express.Router()

  router.get('/', pendenciasController.index.bind(null, connection))
  router.get('/delete/:id', pendenciasController.deleteOne.bind(null, connection))
  router.get('/create', pendenciasController.createForm)
  router.post('/create', pendenciasController.createProcess.bind(null, connection))
  router.get('/update/:id', pendenciasController.updateForm.bind(null, connection))
  router.post('/update/:id', pendenciasController.updateProcess.bind(null, connection))

  return router
}



module.exports = pendenciasRouter