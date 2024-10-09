const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoDocumento = sequelize.define('TipoDocumento', {
  tip_doc_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tip_doc_descripcion: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'tbl_tipo_documento',
  timestamps: false,
});

module.exports = TipoDocumento;