  import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Conversa from '../../assets/Conversa.svg'
import api from "../../service/api";

import { Container, 
        ImgConversa, 
        ContainerItems, 
        Title, 
        Label, 
        Input, 
        ErroMessage, 
        Form ,
        Button,
        CampoUser
      } from "./style";

import lixeira from '../../assets/Lixeira.svg' 

function Home() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    
    loadUsers()
  }, [])

  const schema = yup
  .object().shape({
    name: yup.string().required('É obrigatorio preencher o campo de nome'),
    idade: yup.string().required('É obrigatorio preencher o campo de idade'),
  })
  .required()

  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    const newUser = await api.post('/cadastro', {
                      nome: data.name,
                      idade: data.idade
                    })

    setUsers([...users, newUser])

    resetField("name")
    resetField("idade")

    loadUsers()
  }

  async function loadUsers() {
    const { data } = await api.get('/')

     setUsers(data) 

     console.log(data)
 
  }

  const deleteUser = (userNome) => {

    api.delete(`deletar/${userNome}`)

    const newUser = users.filter(user => user.nome !== userNome)

    setUsers(newUser)
  }

  return (
    <Container>
      <ImgConversa src={Conversa} alt="imagem de duas pessoas conversando"/>
      <ContainerItems>
        <Title>Olá!</Title>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label>Nome</Label>
                    <Input $error={errors.name?.message} type="text" {...register("name")}/>
                    <ErroMessage>{errors.name?.message}</ErroMessage>
                    <Label>Idade</Label>
                    <Input $error={errors.idade?.message} type="text" {...register("idade")}/>
                    <ErroMessage>{errors.idade?.message}</ErroMessage>
                    <Button type="submit">Cadastrar</Button>
                </Form>
                {
                      users.map(user => (
                        <CampoUser key={user.id}>
                          <p>{user.nome}</p>
                          <p>{user.idade}</p>
                          <button onClick={() => deleteUser(user.nome)}><img src={lixeira} alt="imagem de uma lixeira"/></button>
                        </CampoUser>
                      ))
                    }
      </ContainerItems>
    </Container>
  );
}

export default Home;
