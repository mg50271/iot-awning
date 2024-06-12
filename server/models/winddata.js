const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Awning = require('./awning');

const WindData = sequelize.define('WindData', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  
  awning_id: {
    type: DataTypes.INTEGER,
  },
  speed: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});




module.exports = WindData;