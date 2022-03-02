import React, { useState, useEffect, useRef } from 'react'
import { Container, Center, Logo } from './styles'
import left from '../../assets/left.png'
import api from '../../services/api'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'

function TaskDeleted() {
  const { id } = useParams()

  useEffect(async () => {
    const deleteTarefa = await api.delete(`/deleteTask/${id}`)
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
        <div className="containerName">
          <div className="center">A tarefa foi excluída com sucesso!</div>
        </div>
      </Container>
    </>
  )
}

export default TaskDeleted
