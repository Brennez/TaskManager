import Tarefa from '../models/Tarefa';

class TaskController {
  async store(req, res) {
    const { titulo, descricao, tipo, dt_limite} = req.body;

    const tarefa = await Tarefa.create({
      titulo,
      descricao,
      tipo,
      dt_limite,
    });
    res.json(tarefa);
  }

  async get(req, res, next) {
    const tarefas = await Tarefa.findAll();
    res.json(tarefas);
  }

  async getId(req, res, next) {
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      res.status(404).json({ erro: 'Essa tarefa nao existe' });
    } else {
      res.json(tarefa);
    }
  }

  async update(req, res) {
    const { titulo } = req.body;
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      res.status(404).json({ erro: 'Essa tarefa nao existe' });
    } else {
      const novo = await tarefa.update({ titulo: titulo });
      res.json(novo);
    }
  }

  async updateDescricao(req, res) {
    const { descricao } = req.body;
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      res.status(404).json({ erro: 'Essa tarefa nao existe' });
    } else {
      const novo = await tarefa.update({ descricao: descricao });
      res.json(novo);
    }
  }
  async updateTipo(req, res) {
    const { tipo } = req.body;
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      res.status(404).json({ erro: 'Essa tarefa nao existe' });
    } else {
      const novo = await tarefa.update({ tipo: tipo });
      res.json(novo);
    }
  }

  async updateDtLimite(req, res) {
    const { dt_limite } = req.body;
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      res.status(404).json({ erro: 'Essa tarefa nao existe' });
    } else {
      const novo = await tarefa.update({ dt_limite: dt_limite });
      res.json(novo);
    }
  }

  async searchTarefas(req, res) {
    const { titulo } = req.params;

    const myTasks = await Tarefa.findAll({
      where: {
        titulo: titulo,
      },
    });
    return res.json(myTasks);
  }

  // async updateImage(req, res) {
  //   const { imageurl } = req.body;
  //   const { id } = req.params;
  //   const livro = await Livro.findByPk(id);
  //   if (!livro) {
  //     res.status(404).json({ erro: 'Este livro não existe' });
  //   } else {
  //     const novo = await livro.update({ imageurl: imageurl });
  //     res.json(novo);
  //   }
  // }

  async deleteTask(req, res) {
    const myTask = await Tarefa.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json('Tarefa excluida com sucesso');
  }
}

export default new TaskController();
