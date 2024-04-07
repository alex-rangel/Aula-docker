const { Router } = require('express')
const userControllers = require('./App/controllers/UserControllers')

const rota = Router()

rota.post('/cadastro', userControllers.store)
rota.get('/', userControllers.index)
rota.put('/atualizar/:Nome', userControllers.update)
rota.delete('/deletar/:Nome', userControllers.delete)

module.exports = rota