const pendencias = require('../models/pendencias')

const index = async (connection, req, res) => {
  const results = await pendencias.findAll(connection)
  res.render('pendencias/index', { pendencias: results })
}

const deleteOne = async (connection, req, res) => {
  await pendencias.deleteOne(connection, req.params.id)
  res.redirect('/pendencias')
}

const createForm = (req, res) => {
  res.render('pendencias/create')
}

const createProcess = async (connection, req, res) => {
  await pendencias.create(connection, req.body)
  res.redirect('/pendencias')
}

const updateForm = async (connection, req, res) => {
  const pendencia = await pendencias.findById(connection, req.params.id)
  res.render('pendencias/update', { pendencia })
}

const updateProcess = async (connection, req, res) => {
  await pendencias.update(connection, req.params.id, req.body)
  res.redirect('/pendencias')
}
module.exports = {
  index,
  deleteOne,
  createForm,
  createProcess,
  updateForm,
  updateProcess
}