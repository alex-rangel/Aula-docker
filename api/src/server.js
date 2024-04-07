const express = require('express')
require('./database')
const cors = require('cors')
const rotas = require('./routes')

const app = express()

app.use(express.json())

app.use(cors())
app.use(rotas)





app.listen('3003', () => console.log('servidor rodando na porta 3003'))