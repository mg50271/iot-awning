const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Awning = sequelize.define('Awning', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  owner: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_folded: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});



module.exports = Awning;