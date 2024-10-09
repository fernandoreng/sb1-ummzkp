const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Permiso = sequelize.define('Permiso', {
  per_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  per_nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  per_descripcion: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
}, {
  tableName: 'tbl_permisos',
  timestamps: false,
});

module.exports = Permiso;