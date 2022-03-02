/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Logo } from './styles'
import api from '../../services/api'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import Input from '../../components/input'
import { useParams } from 'react-router-dom'

function UpdateDataTarefa() {
  const formularioReferencia = useRef(null)
  const { id } = useParams()

  const submeterFormulario = async data => {
    //Valida dos campos do formulário
    try {
      const esquema = Yup.object().shape({
        dt_limite: Yup.string().required('Você precisa digitar uma data')
      })
      await esquema.validate(data, { abortEarly: false })

      //Faz a requisição da api e grava no banco de dados
      const response = await api.put(`/updateDataLimite/${id}`, {
        dt_limite: data.dt_limite
      })
      //Atuliza a pagina
      window.location.reload()
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const erros = {}
        error.inner.forEach(e => {
          erros[e.path] = e.message
        })
        console.log(erros)
        formularioReferencia.current?.setErrors(erros)
      }
    }
  }

  //pegando os dados do backend
  const [data, setData] = useState([])
  useEffect(async () => {
    const response = await api.get(`/getUmaTarefa/${id}`)
    setData(response.data)
  }, [])

  return (
    <>
      <Logo>
        <div className="container">
          {/* <Link to={`/bookProfile/${id}`}>
            {' '}
            <img className="exitButton" size="20px" src={left} alt="" />{' '}
          </Link> */}
        </div>
      </Logo>
      <Container>
        <ContentForm>
          <Form ref={formularioReferencia} onSubmit={submeterFormulario}>
            <h1 className="title">Editar data da tarefa</h1>
            <div className="container">
              <h2>Data antiga</h2>
              <p className="titulo" href="">
                {data.dt_limite}
              </p>
              <h2 className="tituloDoLivro">Nova Data</h2>
              <Input name="dt_limite" type="text" />
            </div>

            <div className="contentButton">
              <button type="submit" className="botao" id="teste">
                {' '}
                <p className="texto">Aplicar</p>
              </button>
            </div>
          </Form>
        </ContentForm>
      </Container>
    </>
  )
}

export default UpdateDataTarefa
