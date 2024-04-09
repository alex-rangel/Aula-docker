const mongoose = require('mongoose')

const mongoConnection = mongoose.connect('mongodb://mongo-register:27017/Usuarios')
    .then(() => console.log("banco de dados conectado"))

module.exports = mongoConnection