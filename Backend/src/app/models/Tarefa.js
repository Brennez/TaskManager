import Sequelize, { Model } from 'sequelize';

class Tarefa extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: Sequelize.STRING,
        descricao: Sequelize.STRING,
        tipo: Sequelize.STRING,
        dt_limite: Sequelize.STRING,
        categoria: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

export default Tarefa;
