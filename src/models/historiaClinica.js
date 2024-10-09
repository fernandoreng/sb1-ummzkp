const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const HistoriaClinica = sequelize.define('HistoriaClinica', {
  histo_cli_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  histo_cli_fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  histo_cli_descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'tbl_historia_clinica',
  timestamps: false,
});

module.exports = HistoriaClinica;