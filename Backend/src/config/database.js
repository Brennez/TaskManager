/* eslint-disable prettier/prettier */
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123456',
  database: 'databaseTaskManager',
  port: '5432',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
