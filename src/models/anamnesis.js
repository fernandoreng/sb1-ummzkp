const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Anamnesis = sequelize.define('Anamnesis', {
  anam_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  anam_descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'tbl_anamnesis',
  timestamps: false,
});

module.exports = Anamnesis;