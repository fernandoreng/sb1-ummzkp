const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Veterinario = sequelize.define('Veterinario', {
  vet_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  vet_nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  vet_telefono: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  vet_correo: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'tbl_veterinario',
  timestamps: false,
});

module.exports = Veterinario;