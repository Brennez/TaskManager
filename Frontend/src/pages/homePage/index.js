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

import left from '../../assets/arrow-left.png'
import right from '../../assets/arrow-right.png'
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
            <Link to="/perfil">
              <a> Perfil</a>
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
              placeholder="Pesquisar tarefa..."
              class="searchInput"
              name="mySearch"
            />
          </form>
        </ul>
      </Header>
      <Body>
        {/* =========== CABEÇALHO DE LIVROS ============ */}
        <div className="cabecalho">
          <h2 id="title">Minhas Tarefas</h2>
          <ul className="elementos"></ul>
        </div>

        <ContentBook ref={referencia}>
          {data.map(item => {
            const { titulo, descricao, tipo, dt_limite, id } = item
            return (
              <div className="item">
                <div className="info">
                  <p className="titulo"> Título: {titulo}</p>
                  <p className="descricao"> Descrição: {descricao}</p>
                  <p className="data"> Data: {dt_limite}</p>
                  <p className="categoria"> Tipo: {tipo}</p>
                  <div className="botao">
                    <Link className="texto" to={`/TaskProfile/${id}`}>
                      Editar
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}{' '}
          {/* =========== FECHAMENTO DO MAP ============ */}
        </ContentBook>
      </Body>
    </>
  )
}

export default Home
