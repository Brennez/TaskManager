import { Router } from 'express';
import UC from './app/controller/usuarioController';
import TC from './app/controller/TarefaController';
import SC from '../../Backend/src/app/controller/SessionController';
import autenticacao from './app/middleware/autenticacao';
const routes = new Router();

// --------------------- ROTAS DE LIVRO -----------------------------//

routes.post('/createTarefa', autenticacao, TC.store);
routes.get('/getTarefas', TC.get);
routes.get('/searchTarefa/:titulo', TC.searchTarefas);
routes.get('/getUmaTarefa/:id', TC.getId);
routes.put('/updateTituloTarefa/:id', autenticacao, TC.update);
routes.put('/updateDescricao/:id', autenticacao, TC.updateDescricao);
routes.put('/updateTipo/:id', autenticacao, TC.updateTipo);
routes.put('/updateCategoria/:id', autenticacao, TC.updateCategoria);
routes.put('/updateDataLimite/:id', autenticacao, TC.updateDtLimite);
routes.delete('/deleteTask/:id', TC.deleteTask);

// --------------------- ROTAS DE USUÁRIO ----------------------//

routes.put('/update', autenticacao, UC.update);
routes.put('/updateEmail', autenticacao, UC.updateEmail);
routes.put('/updateSenha', autenticacao, UC.updateSenha);
routes.put('/updateTelefone', autenticacao, UC.updateTelefone);
routes.delete('/deleteUsuario', autenticacao, UC.delete);
routes.get('/busca', UC.get);
routes.get('/buscaID', autenticacao, UC.getID);

// ----------------- ROTAS DE ACESSO ---------------//

routes.post('/createUsuario', UC.store);
routes.post('/login', SC.store);

export default routes;
