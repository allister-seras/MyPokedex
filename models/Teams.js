const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Teams model
class Teams extends Model {}

// create fields/columns for Teams model
Teams.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pokemon_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Pokemons',
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
    modelName: 'teams'
  }
);

module.exports = Teams;
