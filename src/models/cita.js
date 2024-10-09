import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Cita = sequelize.define('Cita', {
  cit_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cit_fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'tbl_citas',
  timestamps: false,
});

export default Cita;