import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentBook, Logo, Body } from './styles'
import left from '../../assets/arrow-left.png'
import api from '../../services/api'
import { useParams, useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'

function TaskSearched() {
  const [data, setData] = useState([])
  const referencia = useRef(null)
  var nome = ''
  const MeuTeste = () => {
    const search = useLocation().search
    nome = new URLSearchParams(search).get('mySearch')
  }

  MeuTeste()

  useEffect(async () => {
    const response = await api.get(`/searchTarefa/${nome}`)

    console.log(response.data)

    // // Primeira maneira -> aqui ele já retorna o objeto com formatado
    const result = response.data.map(tarefa => {
      return {
        titulo: tarefa.titulo,
        descricao: tarefa.descricao,
        tipo: tarefa.tipo,
        dt_limite: tarefa.dt_limite
      }
    })

    console.log(result)

    setData(result)
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
        <Body>
          <h1 className="title">Tarefas encontradas</h1>
          <ContentBook ref={referencia}>
            {data.map(item => {
              const { titulo, descricao, tipo, dt_limite } = item
              return (
                <div className="item">
                  <p> Título: {titulo}</p>
                  <div className="info">
                    <p className="titulo"> Descrição: {descricao}</p>
                    <p className="autor"> Tipo: {tipo}</p>
                    <p className="autor"> Data limite: {dt_limite}</p>
                    <div className="botao">
                      {/* <Link to={`/cartList/${id}`}>Adicionar</Link> */}
                    </div>
                  </div>
                </div>
              )
            })}{' '}
            {/* =========== FECHAMENTO DO MAP ============ */}
          </ContentBook>
        </Body>
      </Container>
    </>
  )
}

export default TaskSearched
