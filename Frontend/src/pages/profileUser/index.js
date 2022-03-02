import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Logo } from './styles'
import left from '../../assets/arrow-left.png'
import api from '../../services/api'

import { Link } from 'react-router-dom'

function Profile() {
  const [data, setData] = useState([])
  const referencia = useRef(null)

  useEffect(async () => {
    console.log('teste')
    const response = await api.get('/buscaID')
    setData(response.data)
  }, [])

  return (
    <>
      <Logo>
        <div className="container">
          <Link to="/Home">
            {' '}
            <img className="exitButton" size="20px" src={left} alt="" />{' '}
          </Link>
        </div>
      </Logo>
      <Container>
        <ContentForm ref={referencia}>
          <div className="informacoes">
            <h1 className="title">Meu perfil</h1>
            <h2>Nome</h2>
            <div className="containerName">
              <p className="nome" href="">
                {data.nome}
              </p>
              <div className="icon">
                <Link to="/update"></Link>
              </div>
            </div>
            <h2>Email</h2>
            <div className="containerEmail">
              <p className="email" href="">
                {data.email}
              </p>
            </div>
            <h2 id="tituloSenha">Senha</h2>
            <div className="containerSenha">
              <p className="senha" href="">
                {' '}
                ********
              </p>
              <div className="icon">
                <a href="">
                  <Link to="/updateSenha"></Link>
                </a>
              </div>
            </div>
          </div>
        </ContentForm>
      </Container>
    </>
  )
}

export default Profile
