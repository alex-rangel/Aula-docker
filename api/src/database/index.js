const mongoose = require('mongoose')

const mongoConnection = mongoose.connect('mongodb://localhost:27017/ListaUsuario')
    .then(() => console.log("banco de dados conectado"))

module.exports = mongoConnection