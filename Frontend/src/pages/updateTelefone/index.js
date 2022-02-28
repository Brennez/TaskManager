import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import api from '../../services/api'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import Input from '../../components/input'
import { Link } from 'react-router-dom'
import left from '../../assets/left.png'

function UpdateTelefone() {
  const formularioReferencia = useRef(null)

  function reload() {
    window.location.reload()
  }

  const submeterFormulario = async data => {
    //Valida dos campos do formulário
    try {
      const esquema = Yup.object().shape({
        novoTelefone: Yup.string().required('Você precisa digitar um Telefone')
      })
      await esquema.validate(data, { abortEarly: false })

      //Faz a requisição da api e grava no banco de dados
      const response = await api.put('/updateTelefone', {
        novoTelefone: data.novoTelefone
      })
      //Atuliza a pagina
      reload()
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
    console.log('teste')
    const response = await api.get('/buscaID')
    setData(response.data)
  }, [])

  return (
    <>
      <Logo>
        <div className="container">
          <Link to="/perfil">
            {' '}
            <img className="exitButton" size="20px" src={left} alt="" />{' '}
          </Link>
          <img src={logo} alt="icon" />
        </div>
      </Logo>
      <Container>
        <ContentForm>
          <Form ref={formularioReferencia} onSubmit={submeterFormulario}>
            <h1 className="title">Editar</h1>
            <h2>Telefone antigo</h2>
            <p className="telefone" href="">
              {data.telefone}
            </p>
            <div className="containerInput">
              <h2>Novo telefone</h2>
              <Input
                name="novoTelefone"
                type="number"
                placeholder="Digite seu telefone"
              />
            </div>
            <div className="contentButton">
              <button
                type="submit"
                id="button"
                onClick={reload}
                className="textButton"
              >
                <p className="text">Aplicar</p>
              </button>
            </div>
          </Form>
        </ContentForm>
        <Image></Image>
      </Container>
    </>
  )
}

export default UpdateTelefone
