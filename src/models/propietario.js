const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Propietario = sequelize.define('Propietario', {
  pro_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pro_nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  pro_telefono: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  pro_correo: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'tbl_propietario',
  timestamps: false,
});

module.exports = Propietario;