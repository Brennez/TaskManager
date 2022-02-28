import Sequelize from 'sequelize';
import Usuario from '../app/models/usuario';
import Tarefa from '../app/models/Tarefa';
import databaseConfig from '../config/database';

const models = [Usuario, Tarefa];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models),
    );
  }
}
export default new Database();
