const mongoose = require('mongoose')

const mongoConnection = mongoose.connect('mongodb://mongo-register:27017/Pessoas')
    .then(() => console.log("banco de dados conectado"))

module.exports = mongoConnection