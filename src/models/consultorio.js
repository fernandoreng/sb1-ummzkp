const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Consultorio = sequelize.define('Consultorio', {
  con_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  con_num_consultario: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
}, {
  tableName: 'tbl_consultorio',
  timestamps: false,
});

module.exports = Consultorio;