import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import editorIcon from '../../assets/editor.svg'
import editor from '../../assets/editor.svg'
import left from '../../assets/left.png'
import api from '../../services/api'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'

function BookProfile() {
  const [data, setData] = useState([])
  const referencia = useRef(null)
  // const history = useHistory()
  const { id } = useParams()

  // console.log(history)
  // console.log(id)

  useEffect(async () => {
    const response = await api.get(`/getUmLivro/${id}`)
    setData(response.data)
  }, [])

  // console.log(data.id)

  return (
    <>
      <Logo>
        <div className="container">
          <Link to="/Home">
            {' '}
            <img className="exitButton" size="20px" src={left} alt="" />{' '}
          </Link>
          <img src={logo} alt="icon" />
        </div>
      </Logo>
      <Container>
        <ContentForm ref={referencia}>
          <div>
            <h1 className="title">Meu livro</h1>
            <h2>Nome</h2>
            <div className="containerName">
              <p className="nome" href="">
                {data.nome}
              </p>
              <div className="icon">
                <Link to={`/updateNomeLivro/${id}`}>
                  <img src={editor} alt="" />
                </Link>
              </div>
            </div>
            <h2>Autor</h2>
            <div className="containerAutor">
              <p className="autor" href="">
                {data.autor}
              </p>
              <div className="icon">
                <Link to={`/updateAutor/${id}`}>
                  <img src={editor} alt="" />
                </Link>
              </div>
            </div>
            <h2 id="tituloSinopse">Sinopse</h2>
            <div className="containerSinopse">
              <p className="sinopse" href="">
                {data.sinopse}
              </p>
              <div className="icon">
                <Link to={`/updateSinopse/${id}`}>
                  <img src={editor} alt="" />
                </Link>
              </div>
            </div>
            {/* Fim container
             */}
            <h2 id="tituloCategoria">Categoria</h2>
            <div className="containerCategoria">
              <p className="categoria" href="">
                {data.categoria}
              </p>
              <div className="icon">
                <Link to={`/updateCategoria/${id}`}>
                  <img src={editor} alt="" />
                </Link>
              </div>
            </div>
            <h2 id="tituloGenero">Gênero</h2>
            <div className="containerGenero">
              <p className="genero" href="">
                {data.genero}
              </p>
              <div className="icon">
                <Link to={`/updateGenero/${id}`}>
                  <img src={editor} alt="" />
                </Link>
              </div>
            </div>
            <h2 id="tituloEdicao">Edição</h2>
            <div className="containerEdicao">
              <p className="edicao" href="">
                {data.edicao}
              </p>
              <div className="icon">
                <Link to={`/updateEdicao/${id}`}>
                  <img src={editor} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </ContentForm>
        <Link to={`/updateImage/${id}`}>
          <div className="containerItem">
            <div className="item">
              <div className="conteudoItem">
                <img src={data.imageurl} className="imageItem" />
              </div>
            </div>
          </div>
        </Link>
      </Container>
    </>
  )
}

export default BookProfile
