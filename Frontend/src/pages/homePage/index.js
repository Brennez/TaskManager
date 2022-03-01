import React, { useEffect, useState, useRef } from 'react'

import {
  Header,
  Body,
  Footer,
  Container,
  ContentBook,
  Direction
} from './styles'

import exit from '../../assets/iconLogout.svg'

import left from '../../assets/left.png'
import right from '../../assets/right.png'
import git from '../../assets/iconGithub.svg'
import api from '../../services/api'
import { useContextAutenticacao } from '../../context/autenticacao'
import iconSearch from '../../assets/searchIcon.png'

// ------------------------------------------------------------
// teste 2

import { Link } from 'react-router-dom'

function Home() {
  const { logoff } = useContextAutenticacao()
  const [data, setData] = useState([])
  const referencia = useRef(null)

  useEffect(async () => {
    // console.log('teste')
    const response = await api.get('/getTarefas')
    console.log(response.data)
    setData(response.data)
  }, [])

  const handleLeftClick = e => {
    e.preventDefault()
    console.log(referencia.current.offsetWidth)
    referencia.current.scrollLeft -= referencia.current.offsetWidth
  }

  const handleRightClick = e => {
    e.preventDefault()
    console.log(referencia.current.offsetWidth)
    referencia.current.scrollLeft += referencia.current.offsetWidth
  }

  //teste
  if (!data)
    return (
      <div>
        <h2>Sem tarefas por enquanto</h2>
      </div>
    )

  return (
    <>
      <Header>
        <ul class="menu">
          <li>
            <Link to="/createTask">
              <a>Cadastrar</a>
            </Link>
          </li>

          <li>
            <Link to="/Book">
              {' '}
              <a>Tarefas</a>
            </Link>
          </li>
          <li>
            <Link to="/perfil">
              <a> Perfil</a>
              {/* <img src={avatar} alt="" /> */}
            </Link>
          </li>
          <li>
            <Link to="/login">
              <a onClick={logoff}>Sair</a>
            </Link>
          </li>
          <form action="/taskSearched" className="containerSearch" method="get">
            <img src={iconSearch} alt="" />
            <input
              type="text"
              placeholder="Buscar..."
              class="searchInput"
              name="mySearch"
            />
          </form>
        </ul>
      </Header>
      <Body>
        <Container></Container>
        {/* =========== CABEÇALHO DE LIVROS ============ */}
        <div className="cabecalho">
          <h2>Suas Tarefas</h2>
          <ul className="elementos"></ul>
        </div>

        <ContentBook ref={referencia}>
          {data.map(item => {
            const { titulo, descricao, tipo, dt_limite, categoria, id } = item
            return (
              <div className="item">
                <div className="info">
                  <p className="titulo"> Título: {titulo}</p>
                  <p className="descricao"> Descrição: {descricao}</p>
                  <p className="data"> Data: {dt_limite}</p>
                  <p className="categoria"> Categoria: {categoria}</p>
                  <div className="botao">
                    <Link to={`/TaskProfile/${id}`}>Editar</Link>
                  </div>
                </div>
              </div>
            )
          })}{' '}
          {/* =========== FECHAMENTO DO MAP ============ */}
        </ContentBook>
      </Body>
      <Direction>
        <div className="container">
          <button onClick={handleLeftClick} className="right">
            {' '}
            <img src={left} alt="" />
          </button>
          <button onClick={handleRightClick} className="left">
            {' '}
            <img src={right} alt="" />
          </button>
        </div>
      </Direction>

      <Footer>
        <div className="container">
          <p className="nome">
            UESPI, Campus
            <br />
            Piripiri
          </p>
          <p className="numero">
            (86) 4002-8922
            <br />
            Fale conosco
          </p>
          <a href="https://github.com/Brennez/TaskManager">
            <img src={git} alt="" height={100} width={100} />
          </a>
        </div>
      </Footer>
    </>
  )
}

export default Home
