const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Rol = sequelize.define('Rol', {
  rol_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rol_nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  rol_descripcion: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
}, {
  tableName: 'tbl_rol',
  timestamps: false,
});

module.exports = Rol;