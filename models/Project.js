const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Pokemon = sequelize.define('Pokemon', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    team: {
        type: DataTypes.INTEGER,
        refrences: "teans",
        refrencesKEY: "id"
    }
  });
