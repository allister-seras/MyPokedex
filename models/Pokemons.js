const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create pokemon model
class Pokemons extends Model {}


//create columns for pokemon model
Pokemons.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: DataTypes.STRING,
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
          weight: {
            type: DataTypes.FLOAT,
            allowNull: false
          },
          height: {
            type: DataTypes.FLOAT,
            allowNull: false
          },
          /*description: {
            type: DataTypes.STRING,
            allowNull: false
          }*/
          image: {
            type: DataTypes.STRING,
            allowNull: true
          },
          team_id: {
              type: DataTypes.INTEGER,
              references: {
                model: 'teams',
                key: "id",
              }
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pokemon'
    }
)

module.exports = Pokemons;
