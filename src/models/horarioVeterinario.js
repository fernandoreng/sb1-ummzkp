const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const HorarioVeterinario = sequelize.define('HorarioVeterinario', {
  hor_vet_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  hor_vet_fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  hor_vet_hora_inicio: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  hor_vet_hora_final: {
    type: DataTypes.TIME,
    allowNull: false,
  },
}, {
  tableName: 'tbl_horarios_veterinario',
  timestamps: false,
});

module.exports = HorarioVeterinario;