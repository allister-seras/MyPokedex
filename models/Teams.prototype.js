const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Trip model
class Teams extends Model {}

// create fields/columns for Trip model
Teams.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pokemon2: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pokemons',
            key: 'id',
            unique: false
      }
    },
    pokemon3: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pokemons',
            key: 'id',
            unique: false
      }
    }
    ,
    pokemon4: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pokemons',
            key: 'id',
            unique: false
    }
    },
    pokemon5: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pokemons',
            key: 'id',
            unique: false
    }
    },
    pokemon6: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pokemons',
            key: 'id',
            unique: false
    }
    },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip'
  }
);

module.exports = Teams;
