const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tratamiento = sequelize.define('Tratamiento', {
  trat_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  trat_nombre: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  trat_descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  trat_fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  trat_fecha_fin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'tbl_tratamientos',
  timestamps: false,
});

module.exports = Tratamiento;