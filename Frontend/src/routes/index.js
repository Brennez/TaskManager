import React from 'react'
import { Switch } from 'react-router-dom'
import Login from '../pages/loginPage'
import Register from '../pages/registerPage'
import Home from '../pages/homePage'
import Task from '../pages/registerTask'
import Profile from '../pages/profileUser'
import TaskProfile from '../pages/taskProfile'
import ControleRotas from './route'
import bookList from '../pages/bookList'

import UNT from '../pages/updateNomeTarefa'

// import Update from '../pages/updateNome'
import BookDeleted from '../pages/bookDeleted'
import BookSearched from '../pages/bookSearched'

// import ControleDeRotas from "./route";

function Routes() {
  return (
    <Switch>
      <ControleRotas path="/" exact component={Login}></ControleRotas>
      <ControleRotas path="/login" exact component={Login}></ControleRotas>
      <ControleRotas path="/createUsuario" component={Register}></ControleRotas>
      <ControleRotas
        path="/Home"
        isPrivate={true}
        exact
        component={Home}
      ></ControleRotas>
      <ControleRotas
        path="/createTask"
        isPrivate={true}
        component={Task}
      ></ControleRotas>
      <ControleRotas
        path="/perfil"
        isPrivate={true}
        component={Profile}
      ></ControleRotas>
      {/* <ControleRotas
        path="/update"
        isPrivate={true}
        exact
        component={Update}
      ></ControleRotas> */}
      <ControleRotas
        path="/book"
        isPrivate={true}
        exact
        component={bookList}
      ></ControleRotas>
      <ControleRotas
        path="/bookDeleted/:id"
        isPrivate={true}
        exact
        component={BookDeleted}
      ></ControleRotas>
      <ControleRotas
        path="/bookSearched"
        isPrivate={true}
        exact
        component={BookSearched}
      ></ControleRotas>
      <ControleRotas
        path="/TaskProfile/:id"
        isPrivate={true}
        exact
        component={TaskProfile}
      ></ControleRotas>

      <ControleRotas
        path="/updateTituloTarefa/:id"
        isPrivate={true}
        exact
        component={UNT}
      ></ControleRotas>
    </Switch>
  )
}

export default Routes
