const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Animal = sequelize.define('Animal', {
  anim_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  anim_nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  anim_especie: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  anim_raza: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  anim_fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  anim_sexo: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  anim_peso: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  anim_color: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
}, {
  tableName: 'tbl_animales',
  timestamps: false,
});

module.exports = Animal;