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
import UDT from '../pages/updateDescricao'
import UTT from '../pages/updateTipo'
import UD from '../pages/updateData'

// import Update from '../pages/updateNome'
import TaskDeleted from '../pages/taskDeleted'
import taskSearched from '../pages/taskSearched'

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

      <ControleRotas
        path="/book"
        isPrivate={true}
        exact
        component={bookList}
      ></ControleRotas>
      <ControleRotas
        path="/taskDeleted/:id"
        isPrivate={true}
        exact
        component={TaskDeleted}
      ></ControleRotas>
      <ControleRotas
        path="/taskSearched"
        isPrivate={true}
        exact
        component={taskSearched}
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
      <ControleRotas
        path="/updateDescricaoTarefa/:id"
        isPrivate={true}
        exact
        component={UDT}
      ></ControleRotas>
      <ControleRotas
        path="/updateTipo/:id"
        isPrivate={true}
        exact
        component={UTT}
      ></ControleRotas>
      <ControleRotas
        path="/updateData/:id"
        isPrivate={true}
        exact
        component={UD}
      ></ControleRotas>
    </Switch>
  )
}

export default Routes
