'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarios.init({
    nome: DataTypes.STRING,
    foto: DataTypes.BLOB,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    autorizacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuarios',
    freezeTableName: true,
  });
  return usuarios;
};