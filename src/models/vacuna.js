const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vacuna = sequelize.define('Vacuna', {
  vac_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  vac_nombre: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  vac_tipo: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  vac_cantidad: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
}, {
  tableName: 'tbl_vacunas',
  timestamps: false,
});

module.exports = Vacuna;