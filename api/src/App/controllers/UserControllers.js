const { v4: uuidV4 } = require('uuid')
const User = require('../models/User')


module.exports = {

        async store(req, res){
            const { nome, idade } = req.body

            const user = {
                id: uuidV4(),
                nome: req.body.nome,
                idade: req.body.idade
            }

            const newUser = await User.create(user)

            return res.status(200).send(newUser)
        },

        async index(req, res){

            const users = await User.find()


            return res.status(200).json(users)
        },

        async update(req, res){

            const {Nome} = req.params
            const {idade} = req.body

            console.log(Nome)

            try{
                const usuarioAtualizado = await User.updateOne( {nome: Nome}, { idade })
            }catch(err){
                return res.status(400).json({error:err.menssage})
            }
            return res.status(200).json({menssage: "usuario atualizado com sucesso"})
        },

        async delete(req, res){
            const {Nome} = req.params


            await User.deleteOne({ nome:Nome })

            return res.status(200).json({menssage: "Usuario deletado com sucesso!!"})
        }







}