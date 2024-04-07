const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
            id: {
                type: String,
                required: true
            },
            nome:{
                type: String,
                required: true,
            },
            idade:{
                type: Number,
                required:true
            },
        },    
    {
        timestamps: true,
    });

  module.exports = mongoose.model('user', usersSchema)