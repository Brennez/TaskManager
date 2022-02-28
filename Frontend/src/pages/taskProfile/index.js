import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import editorIcon from '../../assets/editor.svg'
import pencil from '../../assets/pencil.png'
import left from '../../assets/left.png'
import api from '../../services/api'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'

function TaskProfile() {
  const [data, setData] = useState([])
  const referencia = useRef(null)
  // const history = useHistory()
  const { id } = useParams()

  // console.log(history)
  // console.log(id)

  useEffect(async () => {
    const response = await api.get(`/getUmaTarefa/${id}`)
    setData(response.data)
  }, [])

  // console.log(data.id)

  return (
    <>
      {/* <Logo></Logo> */}
      <Container>
        <ContentForm ref={referencia}>
          <h1>Minha Tarefa</h1>

          <div>
            <h2>Título</h2>
            <div className="containerName">
              <p className="nome" href="">
                {data.titulo}
              </p>
              <div className="icon">
                <Link to={`/updateNomeLivro/${id}`}>
                  <img src={pencil} alt="" />
                </Link>
              </div>
            </div>
            <h2>Descrição</h2>
            <div className="containerAutor">
              <p className="autor" href="">
                {data.descricao}
              </p>
              <div className="icon">
                <Link to={`/updateAutor/${id}`}>
                  <img src={pencil} alt="" />
                </Link>
              </div>
            </div>
            <h2 id="tituloSinopse">Tipo</h2>
            <div className="containerSinopse">
              <p className="sinopse" href="">
                {data.tipo}
              </p>
              <div className="icon">
                <Link to={`/updateSinopse/${id}`}>
                  <img src={pencil} alt="" />
                </Link>
              </div>
            </div>
            {/* Fim container
             */}
            <h2 id="tituloCategoria">Data Limite</h2>
            <div className="containerCategoria">
              <p className="categoria" href="">
                {data.dt_limite}
              </p>
              <div className="icon">
                <Link to={`/updateCategoria/${id}`}>
                  <img src={pencil} alt="" />
                </Link>
              </div>
            </div>
            <h2 id="tituloGenero">Categoria</h2>
            <div className="containerGenero">
              <p className="genero" href="">
                {data.categoria}
              </p>
              <div className="icon">
                <Link to={`/updateGenero/${id}`}>
                  <img src={pencil} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </ContentForm>
      </Container>
    </>
  )
}

export default TaskProfile
