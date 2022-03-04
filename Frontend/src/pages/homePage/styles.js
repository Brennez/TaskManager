import styled from 'styled-components'
// teste 2

export const Container = styled.div`
  display: flex;
  margin-right: 4.6rem;
  margin-left: 12.938rem;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-right: 8rem;
  margin-left: 8rem;
  margin-bottom: 5rem;

  .containerSearch {
    display: flex;
  }

  .searchInput {
    background-color: #dfddda;
  }

  .searchInput:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  .menu {
    display: flex;
    align-items: center;
  }

  .menu li {
    margin-left: 21px;
    font-family: 'Montserrat', sans-serif;
  }

  .menu li a {
    color: rgba(32, 32, 40, 0.8);
    padding: 1rem;
    cursor: pointer;
  }
`

export const Body = styled.div`
  .conteudo {
    margin-top: 10rem;
  }
  .conteudo h1 {
    margin-bottom: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    color: rgba(32, 32, 40, 0.8);
  }

  .conteudo p {
    font-size: 1.2rem;
    font-family: 400, 'Montserrat', sans-serif;
    margin-bottom: 2rem;
    color: rgba(32, 32, 40, 0.6);
  }

  .conteudo a {
    color: white;
    padding: 0.688rem 1.5rem;
    background: rgba(155, 160, 252, 0.8);
    border-radius: 0.5rem;
  }

  .cabecalho {
    margin-left: 13.438rem;
    margin-right: 17.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: #461f69;
      font-size: 1.563rem;
      font-family: 900, 'Montserrat', sans-serif;
    }
  }

  .cabecalho .elementos {
    display: flex;
    gap: 1rem;
    li {
      margin-left: 2rem;
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      color: #202028;
    }
  }
`

export const ContentBook = styled.div`
  margin-left: 13.438rem;
  margin-right: 13.438rem;
  margin-top: 2rem;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }

  .item {
    margin-right: 1rem;
    background-color: #461f69;
    padding: 1rem;
    border-radius: 0.5rem;
    padding: 2rem;
    /* width: 184.32px; */
    width: 18rem;
    flex: none;
  }

  p {
    margin: 1rem;
    color: white;
  }

  .item .conteudoItem {
    display: grid;
    justify-content: center;
  }

  .item .conteudoItem .info {
    margin-top: 0.688rem;
    font-family: 700, 'Montserrat', sans-serif;
  }

  .item .conteudoItem .info .titulo {
    font-size: 1rem;
    color: rgba(32, 32, 40, 0.8);
  }

  .item .botao {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.75rem;
    background-color: white;
    padding: 0.5rem;
    border-radius: 00.5rem;
  }

  .conteudoItem .botao a {
    font-family: 900, 'Montserrat', sans-serif;
    color: white;
    font-style: bold;
    border-radius: 0.625rem;
    background-color: #9ba0fc;
    padding: 10px 11.02px 10px 11.02px;
  }

  .conteudoItem .botao img {
    margin-left: 1rem;
  }
`

export const Direction = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
`
export const About = styled.div`
  .conteudo h2 {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    margin-bottom: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 2.25rem;
    color: rgba(32, 32, 40, 0.8);
  }
  .conteudo p {
    margin: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 400, 'Montserrat', sans-serif;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    color: rgba(32, 32, 40, 0.6);
  }
`
export const Footer = styled.div`
  background-color: #461f69;
  padding: 4rem;
  margin-top: 5rem;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .container a {
    color: white;
  }

  .container a img {
    max-width: 50px;
    max-height: 50px;
    width: auto;
    height: auto;
  }
`
