const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  usu_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  usu_documento: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  usu_correo: {
    type: DataTypes.STRING(80),
    allowNull: false,
    unique: true,
  },
  usu_contrasena: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  usu_salt: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  usu_estado: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  usu_fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'tbl_usuarios',
  timestamps: false,
});

module.exports = Usuario;