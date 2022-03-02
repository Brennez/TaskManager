import React, { useRef } from 'react'
import { Container, ContentForm, Image, Header } from './styles'
import logo from '../../assets/logo.svg'
import { Form } from '@unform/web'
import Input from '../../components/input'
import api from '../../services/api'
import left from '../../assets/left.png'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

function RegisterTask() {
  const formularioReferencia = useRef(null)
  const history = useHistory()

  const submeterFormulario = async data => {
    const response = await api.post('createTarefa', {
      titulo: data.titulo,
      descricao: data.descricao,
      tipo: data.tipo,
      dt_limite: data.dt_limite,
      categoria: data.categoria
    })

    // async function deleteRoute (id){
    //   deletar = await api.delete(`/deletar/${id}`)
    // }

    // Pegando id do livro
    const tarefas = await api.get('getTarefas')
    // Pegando o ultimo livro adicionado
    const lastTarefa = tarefas.data[tarefas.data.length - 1]
    const id_tarefas = lastTarefa['id']

    // Pegando id do usuário
    const user = await api.get('buscaID')
    const id_user = user.data['id']

    // const criarLista = await api.post('createLista', {
    //   id_user: id_user,
    //   id_tarefas: id_tarefas
    // })

    // console.log(criarLista.data)
    // console.log(response.data)
    history.push('/Home')
  }

  return (
    <>
      <Header>
        <Link to="/Home">
          {' '}
          {/* <img className="exitButton" size="20px" src={left} alt="" />{' '} */}
        </Link>
      </Header>

      <Container>
        <ContentForm>
          <h1 className="title">Cadastre uma tarefa</h1>
          <Form ref={formularioReferencia} onSubmit={submeterFormulario}>
            <h2>Título</h2>
            <Input name="titulo" type="text" />
            <h2>Descrição</h2>
            <Input name="descricao" type="text" />
            <h2>Tipo</h2>
            <Input name="tipo" type="text" />
            <h2>Data Limite</h2>
            <Input name="dt_limite" type="text" />

            <button type="submit"> Adicionar </button>
          </Form>
        </ContentForm>
      </Container>
    </>
  )
}

export default RegisterTask
