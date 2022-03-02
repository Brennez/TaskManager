import styled from 'styled-components'
import image from '../../assets/image.svg'

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;
  margin-left: 2rem;
  align-items: center;

  .item {
    margin-right: 0.5rem;
    margin-left: 10rem;
    margin-top: 10rem;
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.625rem;
    width: 50%;
    height: 50%;
    flex: none;
    margin-bottom: 10%;
  }
  /* conteúdo do item */
  .item .conteudoItem {
    display: grid;
    justify-content: center;
  }
  /* Imagem de dentro */
  .item .conteudoItem .imageItem {
    /* width: 100px;
    height: 100px; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ContentForm = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  border-radius: 0.5rem;
  place-content: center;
  width: 100%;
  background-color: #461f69;
  max-width: 500px;
  margin-right: 5rem;

  h1 {
    margin-bottom: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    color: white;
  }

  h2 {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .containerName {
    display: flex;
  }

  .nome {
    font-family: 'Nunito', sans-serif;
    border-radius: 5rem;
    border-color: #6c70ef;
    margin-bottom: 1rem;
    border: none;
    outline: none;
    background: #aba59c;
    border-radius: 0.5rem;
    color: black;
    padding: 0.5rem;
    padding-right: 50%;
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    transition: background 0.2s;
  }

  .icon {
    margin-left: 0.5rem;
  }

  .containerAutor {
    display: flex;
  }

  .autor {
    font-family: 'Nunito', sans-serif;
    border-radius: 5rem;
    border-color: #6c70ef;
    border: none;
    outline: none;
    background: #aba59c;
    border-radius: 0.5rem;
    color: black;
    padding: 0.5rem;
    padding-right: 33%;

    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    transition: background 0.2s;
  }

  .containerSinopse {
    display: flex;
  }

  #tituloSinopse {
    margin-top: 1rem;
  }

  .sinopse {
    font-family: 'Nunito', sans-serif;
    border-radius: 5rem;
    border-color: #6c70ef;
    border: none;
    outline: none;
    background: #aba59c;
    border-radius: 0.5rem;
    color: black;
    padding: 0.5rem;
    padding-right: 50%;

    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    transition: background 0.2s;
  }

  .containerCategoria {
    display: flex;
  }

  #tituloCategoria {
    margin-top: 1rem;
  }

  .categoria {
    font-family: 'Nunito', sans-serif;
    border-radius: 5rem;
    border-color: #6c70ef;
    border: none;
    outline: none;
    background: #aba59c;
    border-radius: 0.5rem;
    color: black;
    padding: 0.5rem;
    padding-right: 50%;

    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    transition: background 0.2s;
  }

  .containerGenero {
    display: flex;
  }

  #tituloGenero {
    margin-top: 1rem;
  }

  .genero {
    font-family: 'Nunito', sans-serif;
    border-radius: 5rem;
    border-color: #6c70ef;
    border: none;
    outline: none;
    background: #aba59c;
    border-radius: 0.5rem;
    color: black;
    padding: 0.5rem;
    padding-right: 50%;

    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    transition: background 0.2s;
  }

  .containerEdicao {
    display: flex;
  }

  #tituloEdicao {
    margin-top: 1rem;
  }

  .edicao {
    font-family: 'Nunito', sans-serif;
    border-radius: 5rem;
    border-color: #6c70ef;
    border: none;
    outline: none;
    background: #aba59c;
    border-radius: 0.5rem;
    color: black;
    padding: 0.5rem;
    padding-right: 50%;

    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    transition: background 0.2s;
  }

  .botao {
    display: flex;
    padding: 0.5rem;
    margin-top: 1.5rem;
    border-radius: 0.5rem;
    justify-content: center;
    background-color: white;

    #texto {
      color: red;
    }
  }

  .containerSenha .icon {
    margin-left: 0.5rem;
  }
  .container .info {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info {
    margin-top: 5rem;
    color: rgba(32, 32, 40, 0.8);
    cursor: pointer;
  }
  /* container */
`

export const Image = styled.div`
  background: url(${image}) no-repeat center;
  background-size: contain;
  width: 100vw;
  height: 100vh;
`
