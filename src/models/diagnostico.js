const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Diagnostico = sequelize.define('Diagnostico', {
  diag_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  diag_clasificación: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  diag_cod: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
}, {
  tableName: 'tbl_diagnosticos',
  timestamps: false,
});

module.exports = Diagnostico;